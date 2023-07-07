/** @type import('hardhat/config').HardhatUserConfig */
require('@nomicfoundation/hardhat-toolbox')
// require('@nomiclabs/hardhat-etherscan')
require('dotenv').config()
module.exports = {
  defaultNetwork: 'goerli',
  networks: {
    hardhat: {
      // ensAddress: '' // Disables ENS for the Hardhat network
    },
    goerli: {
      url: 'https://rpc.ankr.com/eth_goerli',
      chainId: 5,
      accounts: [process.env.privateKey]
    },
    bsc: {
      url: 'https://snowy-late-dew.bsc.quiknode.pro/da682a6861d7ed2240bdef9c62a749d379748a32/',
      chainId: 56,
      accounts: [process.env.privateKey]
    },
    bsc_testnet: {
      url: 'https://rpc.ankr.com/bsc_testnet_chapel',
      chainId: 97,
      accounts: [process.env.privateKey]
    },
    avalanche: {
      url: 'https://api.avax.network/ext/bc/C/rpc',
      chainId: 43114,
      accounts: [process.env.privateKey]
    },
    avalanche_fuji_testnet: {
      url: 'https://speedy-nodes-nyc.moralis.io/4fbbf0ef01de379d5be32dc7/avalanche/testnet',
      chainId: 43113,
      accounts: [process.env.privateKey]
    }
  },
  etherscan: {
    apiKey: {
      goerli: process.env.ETHERSCAN_API_KEY,
      bsc_testnet: process.env.BSCSCAN_API_KEY,
      bsc: process.env.BSCSCAN_API_KEY,
      polygon: process.env.POLYGONSCAN_API_KEY,
      avalanche: process.env.SNOWTRACE_API_KEY,
      avalanche_fuji_testnet: process.env.SNOWTRACE_API_KEY
      // similarly for other networks...
    }
  },
  solidity: {
    compilers: [
      {
        version: '0.4.11',
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000
          }
        }
      },
      {
        version: '0.5.16',
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000
          }
        }
      },
      {
        version: '0.5.0',
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000
          }
        }
      },
      {
        version: '0.6.0',
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000
          }
        }
      },
      {
        version: '0.6.2',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },
      {
        version: '0.6.6',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },
      {
        version: '0.7.0',
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000
          }
        }
      },
      {
        version: '0.8.1',
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000
          }
        }
      },
      {
        version: '0.8.0',
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000
          }
        }
      },
      {
        version: '0.8.4',
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000
          }
        }
      },
      {
        version: '0.8.9',
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000
          }
        }
      },
      {
        version: '0.8.17',
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000
          }
        }
      },
      {
        version: '0.7.3',
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000
          }
        }
      },
      {
        version: '0.7.6',
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000
          }
        }
      }
    ]
  }
}
