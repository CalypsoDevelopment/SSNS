import { ethers } from 'hardhat'
import { DeployFunction } from 'hardhat-deploy/types'
import { HardhatRuntimeEnvironment } from 'hardhat/types'

const ZERO_HASH =
  '0x0000000000000000000000000000000000000000000000000000000000000000'

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  console.log('starting')
  const { getNamedAccounts, deployments, network } = hre
  const { deploy, run } = deployments
  const { deployer, owner } = await getNamedAccounts()

  if (network.tags.legacy) {
    const contract = await deploy('LegacySSNSRegistry', {
      from: deployer,
      args: [],
      log: true,
      contract: await deployments.getArtifact('SSNSRegistry'),
    })

    const legacyRegistry = await ethers.getContract('LegacySSNSRegistry')

    const rootTx = await legacyRegistry
      .connect(await ethers.getSigner(deployer))
      .setOwner(ZERO_HASH, owner)
    console.log(`Setting owner of root node to owner (tx: ${rootTx.hash})`)
    await rootTx.wait()

    if (process.env.npm_package_name !== '@ssnsdomains/ssns-contracts') {
      console.log('Running legacy registry scripts...')
      await run('legacy-registry-names', {
        deletePreviousDeployments: false,
        resetMemory: false,
      })
    }

    const revertRootTx = await legacyRegistry
      .connect(await ethers.getSigner(owner))
      .setOwner(ZERO_HASH, '0x0000000000000000000000000000000000000000')
    console.log(`Unsetting owner of root node (tx: ${rootTx.hash})`)
    await revertRootTx.wait()

    await deploy('SSNSRegistry', {
      from: deployer,
      args: [contract.address],
      log: true,
      contract: await deployments.getArtifact('SSNSRegistryWithFallback'),
    })
  } else {
    await deploy('SSNSRegistry', {
      from: deployer,
      args: [],
      log: true,
    })
  }

  if (!network.tags.use_root) {
    const registry = await ethers.getContract('SSNSRegistry')
    const rootOwner = await registry.owner(ZERO_HASH)
    switch (rootOwner) {
      case deployer:
        const tx = await registry.setOwner(ZERO_HASH, owner, { from: deployer })
        console.log(
          `Setting final owner of root node on registry (tx:${tx.hash})...`,
        )
        await tx.wait()
        break
      case owner:
        break
      default:
        console.log(
          `WARNING: SSNS registry root is owned by ${rootOwner}; cannot transfer to owner`,
        )
    }
  }

  return true
}

func.id = 'ssns'
func.tags = ['registry', 'SSNSRegistry']

export default func
