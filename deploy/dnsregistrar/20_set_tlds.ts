import packet from 'dns-packet'
import { ethers } from 'hardhat'
import { DeployFunction } from 'hardhat-deploy/types'
import { HardhatRuntimeEnvironment } from 'hardhat/types'

const tld_map = {
  mainnet: ['xyz'],
  ropsten: ['xyz'],
  localhost: ['xyz'],
  hardhat: ['xyz'],
  goerli: [
    'exposed',
    'target',
    'rocher',
    'weatherchannel',
    'au',
    'homes',
    'bostik',
    'mini',
    'wien',
    'ladbrokes',
    'boutique',
    'democrat',
    'tci',
    'haus',
    'gap',
    'cal',
    'safety',
    'camera',
    'pe',
    'claims',
    'spreadbetting',
    'neustar',
    'dentist',
    'boston',
    'tm',
    'band',
    'nc',
    'toshiba',
    'statefarm',
    'imamat',
    'vistaprint',
    'kr',
    'rwe',
    'macys',
    'thd',
    'bt',
    'ren',
    'email',
    'maison',
    'fish',
    'ar',
    'lt',
    'sfr',
    'locker',
    'map',
    'sa',
    'mx',
    'nexus',
    'read',
    'co',
    'lancome',
    'game',
    'rightathome',
    'sydney',
    'press',
    'duns',
    'pictures',
    'nowruz',
    'smart',
    'nfl',
    'barclaycard',
    'sexy',
    'gifts',
    'wolterskluwer',
    'degree',
    'comsec',
    'aig',
    'abb',
    'my',
    'af',
    'edeka',
    'education',
    'surgery',
    'spot',
    'th',
    'marketing',
    'akdn',
    'link',
    'university',
    'tw',
    'iveco',
    'site',
    'booking',
    'solar',
    'ie',
    'organic',
    'pid',
    'training',
    'diet',
    'hn',
    'philips',
    'catholic',
    'godaddy',
    'lancia',
    'moscow',
    'vc',
    'kerryhotels',
    'se',
    'dev',
    'holiday',
    'kg',
    'unicom',
    'tjx',
    'gmo',
    'hdfc',
    'stcgroup',
    'online',
    'microsoft',
    'weir',
    'capital',
    'parts',
    'gbiz',
    'playstation',
    'bharti',
    'hughes',
    'piaget',
    'trade',
    'gle',
    'reit',
    'hbo',
    'caravan',
    'qpon',
    'you',
    'forsale',
    'tunes',
    'yahoo',
    'rugby',
    'fun',
    'arpa',
    'drive',
    'seven',
    'xerox',
    'work',
    'loan',
    'mobily',
    'lv',
    'shopping',
    'charity',
    'is',
    'dodge',
    'eco',
    'aws',
    'rocks',
    'metlife',
    'fyi',
    'wiki',
    'business',
    'whoswho',
    'sh',
    'nextdirect',
    'bot',
    'bmw',
    'lplfinancial',
    'iselect',
    'gent',
    'ericsson',
    'staples',
    'courses',
    'goo',
    'limo',
    'pfizer',
    'az',
    'office',
    'lixil',
    'fox',
    'coach',
    'futbol',
    'airbus',
    'tl',
    'richardli',
    'got',
    'zone',
    'news',
    'delivery',
    'imdb',
    'landrover',
    'orange',
    'weather',
    'hockey',
    'help',
    'aarp',
    'fresenius',
    'jio',
    'deal',
    'ma',
    'hgtv',
    'goog',
    'ac',
    'foodnetwork',
    'run',
    'lifestyle',
    'bloomberg',
    'ltd',
    'tax',
    'guide',
    'tips',
    'fire',
    'gl',
    'buy',
    'games',
    'travelersinsurance',
    'network',
    'anz',
    'play',
    'onyourside',
    'taobao',
    'politie',
    'mlb',
    'fi',
    'hiv',
    'schmidt',
    'homegoods',
    'vlaanderen',
    'leclerc',
    'immobilien',
    'bond',
    'ceb',
    'software',
    'toray',
    'select',
    'mortgage',
    'msd',
    'lipsy',
    'flir',
    'hot',
    'bentley',
    'hosting',
    'photo',
    'hiphop',
    'gea',
    'amfam',
    'asia',
    'versicherung',
    'eu',
    'hospital',
    'lol',
    'lease',
    'name',
    'estate',
    'one',
    'flights',
    'sncf',
    'origins',
    'cloud',
    'jpmorgan',
    'church',
    'jnj',
    'gucci',
    'cooking',
    'cartier',
    'commbank',
    'llc',
    'reviews',
    'creditcard',
    'bofa',
    'host',
    'de',
    'next',
    'emerck',
    'su',
    'hyatt',
    'dance',
    'goldpoint',
    'fit',
    'yodobashi',
    'lc',
    'bz',
    'edu',
    'pohl',
    'construction',
    'windows',
    'esurance',
    'ki',
    'baby',
    'wanggou',
    'house',
    'swiftcover',
    'airforce',
    'vodka',
    'institute',
    'careers',
    'ieee',
    'lgbt',
    'kinder',
    'hitachi',
    'racing',
    'tv',
    'industries',
    'boats',
    'ollo',
    'hangout',
    'itv',
    'limited',
    'archi',
    'google',
    'rogers',
    'army',
    'events',
    'download',
    'schwarz',
    'kim',
    'diy',
    'citi',
    'accountant',
    'ismaili',
    'singles',
    'mutual',
    'shell',
    'cc',
    'norton',
    'review',
    'design',
    'dot',
    'irish',
    'guru',
    'lancaster',
    'academy',
    'rentals',
    'holdings',
    'gift',
    'omega',
    'pwc',
    'blackfriday',
    'legal',
    'realestate',
    'redumbrella',
    'gmail',
    'dvag',
    'guge',
    'beats',
    'protection',
    'tatar',
    'kindle',
    'cfd',
    'consulting',
    'fiat',
    'extraspace',
    'weibo',
    'kuokgroup',
    'cuisinella',
    'audi',
    'americanexpress',
    'xxx',
    'team',
    'everbank',
    'tf',
    'toyota',
    'land',
    'sener',
    'tvs',
    'travelers',
    'shangrila',
    'durban',
    'camp',
    'scjohnson',
    'oracle',
    'markets',
    'investments',
    'watches',
    'williamhill',
    'kiwi',
    'dclk',
    'boehringer',
    'tattoo',
    'dvr',
    'hr',
    'bing',
    'viva',
    'xihuan',
    'mopar',
    'ryukyu',
    'chrysler',
    'town',
    'pioneer',
    'sew',
    'tkmaxx',
    'jewelry',
    'lotto',
    'pl',
    'srl',
    'vivo',
    'tjmaxx',
    'film',
    'sn',
    'nadex',
    'verisign',
    'analytics',
    'wedding',
    'loans',
    'broker',
    'expert',
    'barclays',
    'wtf',
    'technology',
    'nowtv',
    'taxi',
    'fund',
    'cruise',
    'natura',
    'engineer',
    'caseih',
    'ally',
    'sling',
    'viking',
    'abogado',
    're',
    'nyc',
    'nokia',
    'food',
    'dell',
    'si',
    'bridgestone',
    'lpl',
    'nagoya',
    'accountants',
    'art',
    'bayern',
    'vegas',
    'esq',
    'il',
    'lotte',
    'monster',
    'lamborghini',
    'aeg',
    'icbc',
    'engineering',
    'us',
    'silk',
    'osaka',
    'mn',
    'samsclub',
    'webcam',
    'makeup',
    'juegos',
    'walmart',
    'lamer',
    'yachts',
    'abarth',
    'nz',
    'studio',
    'farm',
    'mba',
    'med',
    'fr',
    'wang',
    'dk',
    'top',
    'sanofi',
    'moda',
    'golf',
    'jll',
    'cafe',
    'bike',
    'grocery',
    'financial',
    'free',
    'law',
    'forex',
    'prof',
    'miami',
    'pet',
    'ag',
    'bg',
    'yokohama',
    'info',
    'yamaxun',
    'win',
    'london',
    'lefrak',
    'allstate',
    'ventures',
    'ntt',
    'gs',
    'delta',
    'center',
    'corsica',
    'tatamotors',
    'walter',
    'helsinki',
    'tires',
    'reise',
    'eat',
    'talk',
    'afamilycompany',
    'gratis',
    'lawyer',
    'pars',
    'alfaromeo',
    'visa',
    'auction',
    'icu',
    'chrome',
    'inc',
    'report',
    'hyundai',
    'pw',
    'box',
    'lighting',
    'xin',
    'room',
    'day',
    'fage',
    'aetna',
    'digital',
    'genting',
    'exchange',
    'ong',
    'services',
    'pharmacy',
    'yun',
    'fedex',
    'ceo',
    'cricket',
    'cbre',
    'voting',
    'cleaning',
    'sharp',
    'pics',
    'biz',
    'able',
    'soccer',
    'scholarships',
    'build',
    'cruises',
    'ferrari',
    'komatsu',
    'giving',
    'asda',
    'rent',
    'bbc',
    'volkswagen',
    'starhub',
    'fast',
    'off',
    'memorial',
    'monash',
    'tt',
    'vision',
    'sb',
    'associates',
    'management',
    'coffee',
    'soy',
    'csc',
    'beer',
    'dunlop',
    'frontier',
    'channel',
    'glass',
    'uy',
    'pramerica',
    'tienda',
    'otsuka',
    'wme',
    'vacations',
    'sc',
    'post',
    'lundbeck',
    'cityeats',
    'casa',
    'obi',
    'discover',
    'xbox',
    'dental',
    'brussels',
    'grainger',
    'gallo',
    'cyou',
    'wales',
    'money',
    'oldnavy',
    'community',
    'builders',
    'chanel',
    'kddi',
    'barefoot',
    'coop',
    'forum',
    'raid',
    'arab',
    'fishing',
    'nissay',
    'warman',
    'shaw',
    'uk',
    'datsun',
    'bank',
    'like',
    'meme',
    'teva',
    'dupont',
    'auto',
    'latrobe',
    'ink',
    'diamonds',
    'bzh',
    'party',
    'redstone',
    'nec',
    'softbank',
    'aquarelle',
    'care',
    'aw',
    'property',
    'cards',
    'pro',
    'earth',
    'vin',
    'quest',
    'creditunion',
    'cisco',
    'frogans',
    'sandvik',
    'adult',
    'lu',
    'statebank',
    'menu',
    'global',
    'okinawa',
    'realty',
    'computer',
    'tours',
    'poker',
    'skin',
    'budapest',
    'finance',
    'srt',
    'phd',
    'zero',
    'northwesternmutual',
    'recipes',
    'duck',
    'tab',
    'shia',
    'world',
    'ninja',
    'by',
    'seek',
    'show',
    'pay',
    'gop',
    'latino',
    'repair',
    'salon',
    'maif',
    'author',
    'olayan',
    'calvinklein',
    'tui',
    'sony',
    'lk',
    'star',
    'wtc',
    'clinique',
    'kpn',
    'vanguard',
    'chintai',
    'gr',
    'lupin',
    'company',
    'amex',
    'case',
    'lifeinsurance',
    'career',
    'plumbing',
    'ott',
    'school',
    'deloitte',
    'broadway',
    'sandvikcoromant',
    'insure',
    'shriram',
    'sakura',
    'study',
    'bbt',
    'casino',
    'motorcycles',
    'healthcare',
    'black',
    'in',
    'hotels',
    'aramco',
    'youtube',
    'safe',
    'place',
    'ibm',
    'zip',
    'honeywell',
    'domains',
    'ggee',
    'support',
    'pink',
    'capitalone',
    'weber',
    'website',
    'dating',
    'aaa',
    'scb',
    'mov',
    'tmall',
    'sca',
    'rsvp',
    'es',
    'attorney',
    'red',
    'vig',
    'flickr',
    'boo',
    'firmdale',
    'stc',
    'aol',
    'symantec',
    'ricoh',
    'storage',
    'hdfcbank',
    'newholland',
    'marriott',
    'pt',
    'moto',
    'am',
    'ke',
    'pccw',
    'wow',
    'contractors',
    'moe',
    'vet',
    'ferrero',
    'nba',
    'voyage',
    'farmers',
    'restaurant',
    'jprs',
    'tube',
    'observer',
    'ubs',
    'surf',
    'hu',
    'gmbh',
    'ril',
    'moi',
    'mtr',
    'hoteles',
    'amica',
    'baidu',
    'actor',
    'dabur',
    'sina',
    'nab',
    'theatre',
    'la',
    'hamburg',
    'photos',
    'ky',
    'kyoto',
    'energy',
    'travelchannel',
    'gi',
    'meet',
    'condos',
    'fly',
    'kpmg',
    'feedback',
    'dhl',
    'sx',
    'schule',
    'supply',
    'abbott',
    'chase',
    'int',
    'ro',
    'zara',
    'guitars',
    'rexroth',
    'intuit',
    'reverse',
    'bms',
    'car',
    'bm',
    'graphics',
    'org',
    'space',
    'jcb',
    'live',
    'nationwide',
    'bar',
    'cx',
    'lanxess',
    'juniper',
    'loft',
    'media',
    'secure',
    'voto',
    'data',
    'codes',
    'mobi',
    'cheap',
    'ftr',
    'furniture',
    'clubmed',
    'international',
    'tushu',
    'gives',
    'productions',
    'buzz',
    'bestbuy',
    'sale',
    'ipiranga',
    'new',
    'xyz',
    'afl',
    'skype',
    'blue',
    'george',
    'lb',
    'sbi',
    'pin',
    'lego',
    'cl',
    'guardian',
    'com',
    'avianca',
    'pm',
    'catering',
    'hsbc',
    'bosch',
    'systems',
    'country',
    'airtel',
    'mattel',
    'cam',
    'dnp',
    'abbvie',
    'frl',
    'reisen',
    'kfh',
    'lasalle',
    'supplies',
    'movie',
    'rip',
    'tech',
    'shoes',
    'frontdoor',
    'gold',
    'sohu',
    'taipei',
    'docs',
    'comcast',
    'audio',
    'lr',
    'passagens',
    'io',
    'uno',
    'cba',
    'circle',
    'agency',
    'tel',
    'viajes',
    'jot',
    'schaeffler',
    'android',
    'travel',
    'bible',
    'tn',
    'nf',
    'luxe',
    'yandex',
    'watch',
    'hotmail',
    'rich',
    'alipay',
    'style',
    'vote',
    'axa',
    'luxury',
    'desi',
    'book',
    'ug',
    'qvc',
    'cr',
    'prudential',
    'wed',
    'science',
    'ru',
    'shop',
    'cipriani',
    'gov',
    'blog',
    'horse',
    'cool',
    'dds',
    'ubank',
    'uconnect',
    'compare',
    'tennis',
    'intel',
    'cfa',
    'ping',
    'alsace',
    'mint',
    'showtime',
    'kitchen',
    'coupon',
    'temasek',
    'click',
    'social',
    'melbourne',
    'how',
    'fan',
    'fans',
    'nra',
    'jaguar',
    'mitsubishi',
    'save',
    'sky',
    'accenture',
    'yt',
    'gd',
    'vip',
    'open',
    'jobs',
    'bid',
    'ses',
    'aco',
    'discount',
    'bingo',
    'mom',
    'shiksha',
    'joburg',
    'kerryproperties',
    'nico',
    'best',
    'pizza',
    'krd',
    'toys',
    'mit',
    'zuerich',
    'tiffany',
    'cbs',
    'woodside',
    'pnc',
    'partners',
    'immo',
    'bradesco',
    'ist',
    'fashion',
    'onl',
    'auspost',
    'ca',
    'call',
    'yoga',
    'fo',
    'winners',
    'stream',
    'bw',
    'berlin',
    'lds',
    'fujitsu',
    'football',
    'citadel',
    'fail',
    'express',
    'cab',
    'glade',
    'works',
    'wf',
    'honda',
    'swatch',
    'rest',
    'hkt',
    'homesense',
    'citic',
    'song',
    'lincoln',
    'college',
    'video',
    'dog',
    'cancerresearch',
    'pr',
    'rmit',
    'epson',
    'cbn',
    'total',
    'today',
    'ice',
    'deals',
    'athleta',
    'ngo',
    'theater',
    'brother',
    'love',
    'gallup',
    'progressive',
    'ltda',
    'dubai',
    'na',
    'christmas',
    'kosher',
    'bcg',
    'store',
    'ups',
    'tiaa',
    'search',
    'ws',
    'basketball',
    'security',
    'baseball',
    'club',
    'fido',
    'hisamitsu',
    'kaufen',
    'stada',
    'insurance',
    'flowers',
    'locus',
    'dad',
    'net',
    'apple',
    'bbva',
    'sarl',
    'kerrylogistics',
    'blockbuster',
    'africa',
    'vana',
    'date',
    'mckinsey',
    'doha',
    'rehab',
    'lilly',
    'ad',
    'alibaba',
    'olayangroup',
    'ee',
    'dtv',
    'vuelos',
    'cymru',
    'ax',
    'azure',
    'villas',
    'mtn',
    'family',
    'reliance',
    'mma',
    'agakhan',
    'cern',
    'bio',
    'samsung',
    'marshalls',
    'shouji',
    'bugatti',
    'garden',
    'solutions',
    'hermes',
    'ads',
    'ooo',
    'enterprises',
    'cash',
    'volvo',
    'bananarepublic',
    'fairwinds',
    'kia',
    'canon',
    'zappos',
    'sucks',
    'amsterdam',
    'trust',
    'adac',
    'xfinity',
    'city',
    'fitness',
    'mil',
    'health',
    'sbs',
    'sg',
    'ski',
    'mm',
    'faith',
    'doctor',
    'id',
    'jetzt',
    'jmp',
    'infiniti',
    'gn',
    'here',
    'now',
    'living',
    'bnpparibas',
    'za',
    'porn',
    'tokyo',
    'green',
    'rodeo',
    'museum',
    'smile',
    'itau',
    'promo',
    'zm',
    'goodyear',
    'wine',
    'beauty',
    'no',
    'linde',
    'be',
    'vn',
    'merckmsd',
    'pictet',
    'life',
    'tirol',
    'foo',
    'gallery',
    'contact',
    'photography',
    'banamex',
    'scor',
    'mormon',
    'istanbul',
    'firestone',
    'pub',
    'republican',
    'nhk',
    'ing',
    'etisalat',
    'plus',
    'jp',
    'praxi',
    'trv',
    'pru',
    'panasonic',
    'lidl',
    'ford',
    'aigo',
    'nike',
    'at',
    'properties',
    'capetown',
    'java',
    'abc',
    'virgin',
    'navy',
    'americanfamily',
    'sex',
    'arte',
    'coupons',
    'prime',
    'crs',
    'jcp',
    'autos',
    'abudhabi',
    'liaison',
    'apartments',
    'tools',
    'stockholm',
    'florist',
    'lexus',
    'phone',
    'sas',
    'crown',
    'tdk',
    'saarland',
    'clothing',
    'jeep',
    'paris',
    'credit',
    'realtor',
    'cn',
    'direct',
    'fujixerox',
    'maserati',
    'saxo',
    'gdn',
    'directory',
    'app',
    'fidelity',
    'anquan',
    'lat',
    'prod',
    'trading',
    'nissan',
    'homedepot',
    'gripe',
    'netflix',
    'mobile',
    'dish',
    'clinic',
    'cookingchannel',
    'men',
    'ikano',
    'equipment',
    'mls',
    'suzuki',
    'sj',
    'hk',
    'group',
    'ovh',
    'bargains',
    'tickets',
    'bet',
    'joy',
    'hair',
    'page',
    'physio',
    'chat',
    'audible',
    'dealer',
    'nikon',
    'cars',
    'bnl',
    'mg',
    'allfinanz',
    'foundation',
    'market',
    'netbank',
  ],
}

const ZERO_HASH =
  '0x0000000000000000000000000000000000000000000000000000000000000000'

function encodeName(name: string) {
  return '0x' + packet.name.encode(name).toString('hex')
}

async function setTLDs(
  owner: string,
  registry: any,
  registrar: any,
  tlds: any[],
) {
  if (tlds === undefined) {
    return []
  }

  const transactions: any[] = []
  for (const tld of tlds) {
    if (
      registrar.address !== (await registry.owner(ethers.utils.namehash(tld)))
    ) {
      console.log(`Transferring .${tld} to new DNS registrar`)
      transactions.push(
        await registrar.enableNode(encodeName(tld), {
          gasLimit: 10000000,
        }),
      )
    }
  }
  return transactions
}
const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { getNamedAccounts, network } = hre
  const { owner } = await getNamedAccounts()

  const signer = await ethers.getSigner(owner)

  let transactions: any[] = []
  const registrar = await ethers.getContract('DNSRegistrar', signer)
  const registry = await ethers.getContract('SSNSRegistry', signer)
  transactions = await setTLDs(
    owner,
    registry,
    registrar,
    tld_map[network.name as keyof typeof tld_map],
  )

  if (transactions.length > 0) {
    console.log(
      `Waiting on ${transactions.length} transactions setting DNS TLDs`,
    )
    await Promise.all(transactions.map((tx) => tx.wait()))
  }
}

func.tags = ['dnsregistrar']
func.dependencies = ['registry', 'dnssec-oracle']

export default func
