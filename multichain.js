import fetch from 'node-fetch';

const queryMultiswap = async () => {
  const multiswapAPI = 'https://bridgeapi.anyswap.exchange/v2/all/history/all/all/all/all?offset=0&limit=1000&status=10';
  const res = await fetch(multiswapAPI).catch(err => console.error(err));
  const json = await res.json().catch(err => console.error(err));
  var networks_to = {};
  var networks_from = {};
  var assets = {};
  json.info.forEach((tx) => {
    if (!networks_from[networkLookup(tx.fromChainID)]) networks_from[networkLookup(tx.fromChainID)] = 0;
    networks_from[networkLookup(tx.fromChainID)] += 1;
    if (!networks_to[networkLookup(tx.toChainID)]) networks_to[networkLookup(tx.toChainID)] = 0;
    networks_to[networkLookup(tx.toChainID)] += 1;
    if (!assets[tx.pairid]) assets[tx.pairid] = 0;
    assets[tx.pairid] += 1;
  });

  const sortali = (dizio) => {
    var items = Object.keys(dizio).map(
      (key) => { return [key, dizio[key]] });
    items.sort(
      (first, second) => { return second[1] - first[1] }
    );
    const final = items.map(
      (e) => { return e });
    return final;
  }
  assets = sortali(assets);
  networks_from = sortali(networks_from);
  networks_to = sortali(networks_to);

  console.log("Networks of origin")
  console.log(networks_from);
  console.log("Networks of destination")
  console.log(networks_to);
  console.log("Assets")
  console.log(assets);
}

const networkLookup = (chainID) => {
  const networks = {
    1: 'Ethereum Mainnet',
    2: 'Expanse Network',
    3: 'Ethereum Testnet Ropsten',
    4: 'Ethereum Testnet Rinkeby',
    5: 'Ethereum Testnet Görli',
    6: 'Ethereum Classic Testnet Kotti',
    7: 'ThaiChain',
    8: 'Ubiq',
    9: 'Ubiq Network Testnet',
    10: 'Optimistic Ethereum',
    11: 'Metadium Mainnet',
    12: 'Metadium Testnet',
    13: 'Diode Testnet Staging',
    14: 'Flare Mainnet',
    15: 'Diode Prenet',
    16: 'Flare Testnet Coston',
    17: 'ThaiChain 2.0 ThaiFi',
    18: 'ThunderCore Testnet',
    19: 'Songbird Canary-Network',
    20: 'ELA-ETH-Sidechain Mainnet',
    21: 'ELA-ETH-Sidechain Testnet',
    22: 'ELA-DID-Sidechain Mainnet',
    23: 'ELA-DID-Sidechain Testnet',
    24: 'Dithereum Mainnet',
    25: 'Cronos Mainnet Beta',
    26: 'Genesis L1 testnet',
    27: 'ShibaChain',
    28: 'Boba Network Rinkeby Testnet',
    29: 'Genesis L1',
    30: 'RSK Mainnet',
    31: 'RSK Testnet',
    32: 'GoodData Testnet',
    33: 'GoodData Mainnet',
    34: 'Dithereum Testnet',
    35: 'TBWG Chain',
    38: 'Valorbit',
    40: 'Telos EVM Mainnet',
    41: 'Telos EVM Testnet',
    42: 'Ethereum Testnet Kovan',
    43: 'Darwinia Pangolin Testnet',
    44: 'Darwinia Crab Network',
    50: 'XinFin Network Mainnet',
    51: 'XinFin Apothem Testnet',
    52: 'CoinEx Smart Chain Mainnet',
    53: 'CoinEx Smart Chain Testnet',
    55: 'Zyx Mainnet',
    56: 'Binance Smart Chain',
    57: 'Syscoin Mainnet',
    58: 'Ontology Mainnet',
    59: 'EOS Mainnet',
    60: 'GoChain',
    61: 'Ethereum Classic Mainnet',
    62: 'Ethereum Classic Testnet Morden',
    63: 'Ethereum Classic Testnet Mordor',
    64: 'Ellaism',
    65: 'OKExChain Testnet',
    66: 'OKExChain Mainnet',
    67: 'DBChain Testnet',
    68: 'SoterOne Mainnet',
    69: 'Optimistic Ethereum Testnet Kovan',
    76: 'Mix',
    77: 'POA Network Sokol',
    78: 'PrimusChain mainnet',
    80: 'GeneChain',
    82: 'Meter Mainnet',
    83: 'Meter Testnet',
    85: 'GateChain Testnet',
    86: 'GateChain Mainnet',
    88: 'TomoChain',
    95: 'CryptoKylin Testnet',
    96: 'NEXT Smart Chain',
    97: 'Binance Smart Chain Testnet',
    99: 'POA Network Core',
    100: 'Gnosis Chain (formerly xDai)',
    101: 'EtherInc',
    102: 'Web3Games Testnet',
    106: 'Velas EVM Mainnet',
    108: 'ThunderCore Mainnet',
    110: 'Proton Testnet',
    111: 'EtherLite Chain',
    122: 'Fuse Mainnet',
    123: 'Fuse Sparknet',
    124: 'Decentralized Web Mainnet',
    127: 'Factory 127 Mainnet',
    128: 'Huobi ECO Chain Mainnet',
    137: 'Polygon Mainnet',
    142: 'DAX CHAIN',
    162: 'Lightstreams Testnet',
    163: 'Lightstreams Mainnet',
    170: 'HOO Smart Chain Testnet',
    172: 'Latam-Blockchain Resil Testnet',
    186: 'Seele Mainnet',
    188: 'BMC Mainnet',
    189: 'BMC Testnet',
    199: 'BitTorrent Chain Mainnet',
    200: 'Arbitrum on xDai',
    211: 'Freight Trust Network',
    222: 'Permission',
    246: 'Energy Web Chain',
    250: 'Fantom Opera',
    256: 'Huobi ECO Chain Testnet',
    262: 'SUR Blockchain Network',
    269: 'High Performance Blockchain',
    288: 'Boba Network',
    321: 'KCC Mainnet',
    322: 'KCC Testnet',
    336: 'Shiden',
    338: 'Cronos Testnet',
    361: 'Theta Mainnet',
    363: 'Theta Sapphire Testnet',
    364: 'Theta Amber Testnet',
    365: 'Theta Testnet',
    369: 'PulseChain Mainnet',
    385: 'Lisinski',
    420: 'Optimistic Ethereum Testnet Goerli',
    499: 'Rupaya',
    558: 'Tao Network',
    588: 'Metis Stardust Testnet',
    595: 'Acala Mandala Testnet',
    666: 'Pixie Chain Testnet',
    686: 'Karura Network',
    721: 'Factory 127 Testnet',
    777: 'cheapETH',
    787: 'Acala Network',
    803: 'Haic',
    820: 'Callisto Mainnet',
    821: 'Callisto Testnet',
    880: 'Ambros Chain Mainnet',
    888: 'Wanchain',
    940: 'PulseChain Testnet',
    977: 'Nepal Blockchain Network',
    998: 'Lucky Network',
    999: 'Wanchain Testnet',
    1001: 'Klaytn Testnet Baobab',
    1007: 'Newton Testnet',
    1010: 'Evrice Network',
    1012: 'Newton',
    1022: 'Sakura',
    1023: 'Clover Testnet',
    1024: 'Clover Mainnet',
    1028: 'BitTorrent Chain Testnet',
    1088: 'Metis Andromeda Mainnet',
    1139: 'MathChain',
    1140: 'MathChain Testnet',
    1202: 'World Trade Technical Chain Mainnet',
    1213: 'Popcateum Mainnet',
    1280: 'HALO Mainnet',
    1284: 'Moonbeam',
    1285: 'Moonriver',
    1286: 'Moonrock',
    1287: 'Moonbase Alpha',
    1288: 'Moonshadow',
    1618: 'Catecoin Chain Mainnet',
    1620: 'Atheios',
    1657: 'Btachain',
    1856: 'Teslafunds',
    1987: 'EtherGem',
    2020: '420coin',
    2021: 'Edgeware Mainnet',
    2022: 'Beresheet Testnet',
    2025: 'Rangers Protocol Mainnet',
    2100: 'Ecoball Mainnet',
    2101: 'Ecoball Testnet Espuma',
    2559: 'Kortho Mainnet',
    3331: 'ZCore Testnet',
    3690: 'Bittex Mainnet',
    4002: 'Fantom Testnet',
    4689: 'IoTeX Network Mainnet',
    4690: 'IoTeX Network Testnet',
    5197: 'EraSwap Mainnet',
    5315: 'Uzmi Network Mainnet',
    5700: 'Syscoin Tanenbaum Testnet',
    5851: 'Ontology Testnet',
    5869: 'Wegochain Rubidium Mainnet',
    6626: 'Pixie Chain Mainnet',
    7878: 'Hazlor Testnet',
    8029: 'MDGL Testnet',
    8080: 'GeneChain Adenine Testnet',
    8217: 'Klaytn Mainnet Cypress',
    8285: 'KorthoTest',
    8723: 'TOOL Global Mainnet',
    8724: 'TOOL Global Testnet',
    8888: 'Ambros Chain Testnet',
    8995: 'bloxberg',
    9000: 'Evmos Testnet',
    9001: 'Evmos',
    9100: 'Genesis Coin',
    9527: 'Rangers Protocol Testnet Robin',
    9999: 'myOwn Testnet',
    10000: 'Smart Bitcoin Cash',
    10001: 'Smart Bitcoin Cash Testnet',
    10101: 'Blockchain Genesis Mainnet',
    12051: 'Singularity ZERO Testnet',
    12052: 'Singularity ZERO Mainnet',
    16000: 'MetaDot Mainnet',
    16001: 'MetaDot Testnet',
    19845: 'BTCIX Network',
    24484: 'Webchain',
    24734: 'MintMe.com Coin',
    31102: 'Ethersocial Network',
    31337: 'GoChain Testnet',
    32659: 'Fusion Mainnet',
    39797: 'Energi Mainnet',
    42069: 'pegglecoin',
    42161: 'Arbitrum One',
    42220: 'Celo Mainnet',
    42261: 'Emerald Paratime Testnet',
    42262: 'Emerald Paratime Mainnet',
    43110: 'Athereum',
    43113: 'Avalanche Fuji Testnet',
    43114: 'Avalanche Mainnet',
    44787: 'Celo Alfajores Testnet',
    49797: 'Energi Testnet',
    60000: 'Thinkium Testnet Chain 0',
    60001: 'Thinkium Testnet Chain 1',
    60002: 'Thinkium Testnet Chain 2',
    60103: 'Thinkium Testnet Chain 103',
    62320: 'Celo Baklava Testnet',
    70000: 'Thinkium Mainnet Chain 0',
    70001: 'Thinkium Mainnet Chain 1',
    70002: 'Thinkium Mainnet Chain 2',
    70103: 'Thinkium Mainnet Chain 103',
    71393: 'Polyjuice Testnet',
    73799: 'Energy Web Volta Testnet',
    78110: 'Firenze test network',
    80001: 'Polygon Testnet Mumbai',
    100000: 'QuarkChain Mainnet Root',
    100001: 'QuarkChain Mainnet Shard 0',
    100002: 'QuarkChain Mainnet Shard 1',
    100003: 'QuarkChain Mainnet Shard 2',
    100004: 'QuarkChain Mainnet Shard 3',
    100005: 'QuarkChain Mainnet Shard 4',
    100006: 'QuarkChain Mainnet Shard 5',
    100007: 'QuarkChain Mainnet Shard 6',
    100008: 'QuarkChain Mainnet Shard 7',
    110000: 'QuarkChain Devnet Root',
    110001: 'QuarkChain Devnet Shard 0',
    110002: 'QuarkChain Devnet Shard 1',
    110003: 'QuarkChain Devnet Shard 2',
    110004: 'QuarkChain Devnet Shard 3',
    110005: 'QuarkChain Devnet Shard 4',
    110006: 'QuarkChain Devnet Shard 5',
    110007: 'QuarkChain Devnet Shard 6',
    110008: 'QuarkChain Devnet Shard 7',
    200625: 'Akroma',
    201018: 'Alaya Mainnet',
    201030: 'Alaya Dev Testnet',
    210309: 'PlatON Dev Testnet',
    246529: 'ARTIS sigma1',
    246785: 'ARTIS Testnet tau1',
    281121: 'Social Smart Chain Mainnet',
    333888: 'Polis Testnet',
    333999: 'Polis Mainnet',
    421611: 'Arbitrum Testnet Rinkeby',
    955305: 'Eluvio Content Fabric',
    1313114: 'Etho Protocol',
    1313500: 'Xerom',
    1337702: 'Kintsugi',
    7762959: 'Musicoin',
    13371337: 'PepChain Churchill',
    18289463: 'IOLite',
    20181205: 'quarkblockchain',
    28945486: 'Auxilium Network Mainnet',
    35855456: 'Joys Digital Mainnet',
    61717561: 'Aquachain',
    99415706: 'Joys Digital TestNet',
    192837465: 'Gather Mainnet Network',
    245022926: 'Neon EVM DevNet',
    245022934: 'Neon EVM MainNet',
    245022940: 'Neon EVM TestNet',
    311752642: 'OneLedger Mainnet',
    356256156: 'Gather Tesnet Network',
    486217935: 'Gather Devnet Network',
    1122334455: 'IPOS Network',
    1313161554: 'Aurora MainNet',
    1313161555: 'Aurora TestNet',
    1313161556: 'Aurora BetaNet',
    1666600000: 'Harmony Mainnet Shard 0',
    1666600001: 'Harmony Mainnet Shard 1',
    1666600002: 'Harmony Mainnet Shard 2',
    1666600003: 'Harmony Mainnet Shard 3',
    1666700000: 'Harmony Testnet Shard 0',
    1666700001: 'Harmony Testnet Shard 1',
    1666700002: 'Harmony Testnet Shard 2',
    1666700003: 'Harmony Testnet Shard 3',
    2021121117: 'DataHopper',
    3125659152: 'Pirl',
    4216137055: 'OneLedger Testnet Frankenstein',
    11297108099: 'Palm Testnet',
    11297108109: 'Palm Mainnet',
    197710212030: 'Ntity Mainnet',
    197710212031: 'Haradev Testnet',
    6022140761023: 'Molereum Network',
  }
  return networks[chainID];
}

queryMultiswap();
