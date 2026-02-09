/**
 * 鐚挭鍙敜鍣?- 闊抽鏁版嵁鏄犲皠琛?
 * 鎵€鏈夋寜閽厤缃俊鎭?
 */

const audioData = {
  // ===== 妯″潡涓€锛氱尗鍜鑹茬被 =====
  meiduan: {
    id: 'meiduan',
    name: '涓夊瞾缇庣煭灏忓▏濞?,
    desc: '濞囨淮婊寸殑鍠靛彨澹?,
    icon: '馃憫',
    category: 'role',
    audioUrl: '/packageA/audio/涓夊瞾缇庣煭灏忓▏濞?mp3'
  },
  lihua: {
    id: 'lihua',
    name: '鍗佸叓鏂ょ寷鐢风嫺鑺?,
    desc: '浣庢矇鏈夊姏鐨勫彨澹?,
    icon: '馃挭',
    category: 'role',
    audioUrl: '/packageA/audio/鍗佸叓鏂ょ寷鐢风嫺鑺?mp3'
  },
  buou: {
    id: 'buou',
    name: '鍌插▏甯冨伓澶у皬濮?,
    desc: '楂樺偛鐨勫柕澹?,
    icon: '馃懜',
    category: 'role',
    audioUrl: '/packageA/audio/鍌插▏甯冨伓澶у皬濮?mp3'
  },
  xianluo: {
    id: 'xianluo',
    name: '璇濈棬鏆圭綏灏忚瘽鐥?,
    desc: '杩炵画涓嶆柇鐨勫柕鍠靛０',
    icon: '馃棧锔?,
    category: 'role',
    audioUrl: '/packageA/audio/璇濈棬鏆圭綏灏忚瘽鐥?mp3'
  },
  juzuo: {
    id: 'juzuo',
    name: '姗樺骇澶т汉',
    desc: '鎱垫噿鑲ヨ儢鐨勫彨澹?,
    icon: '馃崐',
    category: 'role',
    audioUrl: '/packageA/audio/姗樺骇澶т汉.mp3'
  },
  heimao: {
    id: 'heimao',
    name: '榛戠尗璀﹂暱',
    desc: '璀﹁鐨勫彨澹?,
    icon: '馃暥锔?,
    category: 'role',
    audioUrl: '/packageA/audio/榛戠尗璀﹂暱.mp3'
  },
  nainiu: {
    id: 'nainiu',
    name: '濂剁墰鐚柉瀛?,
    desc: '绁炵粡璐ㄧ殑鍠靛彨',
    icon: '馃悇',
    category: 'role',
    audioUrl: '/packageA/audio/濂剁墰鐚柉瀛?mp3'
  },

  // ===== 妯″潡浜岋細鏃ュ父浜掑姩绫?=====
  laiwan: {
    id: 'laiwan',
    name: '鏉ョ帺鍛€',
    desc: '鍏村閭€璇风殑鍙０',
    icon: '馃幘',
    category: 'daily',
    audioUrl: '/packageA/audio/鏉ョ帺鍛€.mp3'
  },
  kaifan: {
    id: 'kaifan',
    name: '寮€楗暒',
    desc: '鎬ュ垏璁ㄩ鐨勫彨澹?,
    icon: '馃嵔锔?,
    category: 'daily',
    audioUrl: '/packageA/audio/寮€楗暒.mp3'
  },
  momo: {
    id: 'momo',
    name: '鎽告懜澶?,
    desc: '婊¤冻鐨勫懠鍣滃０',
    icon: '鉁?,
    category: 'daily',
    audioUrl: '/packageA/audio/鎽告懜澶?mp3'
  },
  bugaoxing: {
    id: 'bugaoxing',
    name: '涓嶉珮鍏?,
    desc: '鎶辨€ㄧ殑鍠靛０',
    icon: '馃樉',
    category: 'daily',
    audioUrl: '/packageA/audio/涓嶉珮鍏?mp3'
  },
  biepeng: {
    id: 'biepeng',
    name: '鍒鎴?,
    desc: '璀﹀憡鐨勪綆鍚?,
    icon: '鈿狅笍',
    category: 'daily',
    audioUrl: '/packageA/audio/鍒鎴?mp3'
  },
  yaobao: {
    id: 'yaobao',
    name: '瑕佹姳鎶?,
    desc: '鎾掑▏鐨勫彨澹?,
    icon: '馃',
    category: 'daily',
    audioUrl: '/packageA/audio/瑕佹姳鎶?mp3'
  },

  // ===== 妯″潡涓夛細鎯呯华琛ㄨ揪绫?=====
  gaoxing: {
    id: 'gaoxing',
    name: '楂樺叴',
    desc: '娆㈠揩鐨勫柕鍙?,
    icon: '馃樃',
    category: 'emotion',
    audioUrl: '/packageA/audio/楂樺叴.mp3'
  },
  beishang: {
    id: 'beishang',
    name: '鎮蹭激',
    desc: '鍝€鎬ㄧ殑鍠靛憸',
    icon: '馃樋',
    category: 'emotion',
    audioUrl: '/packageA/audio/鎮蹭激.mp3'
  },
  jingya: {
    id: 'jingya',
    name: '鎯婅',
    desc: '鐭績鐨勫柕澹?,
    icon: '馃樅',
    category: 'emotion',
    audioUrl: '/packageA/audio/鎯婅.mp3'
  },
  shengqi: {
    id: 'shengqi',
    name: '鐢熸皵',
    desc: '鎰ゆ€掔殑鍝堟皵',
    icon: '馃樉',
    category: 'emotion',
    audioUrl: '/packageA/audio/鐢熸皵.mp3'
  },
  kunle: {
    id: 'kunle',
    name: '鍥颁簡',
    desc: '鎵撳搱娆犲０',
    icon: '馃槾',
    category: 'emotion',
    audioUrl: '/packageA/audio/鍥颁簡.mp3'
  },
  haoqi: {
    id: 'haoqi',
    name: '濂藉',
    desc: '鐤戞儜鐨勫柕澹?,
    icon: '馃',
    category: 'emotion',
    audioUrl: '/packageA/audio/濂藉.mp3'
  },

  // ===== 妯″潡鍥涳細瓒ｅ懗鍦烘櫙绫?=====
  cainai: {
    id: 'cainai',
    name: '韪╁ザ鏃堕棿',
    desc: '韪╁ザ+鍛煎櫆澹?,
    icon: '馃惥',
    category: 'scene',
    audioUrl: '/packageA/audio/韪╁ザ鏃堕棿.mp3'
  },
  paoku: {
    id: 'paoku',
    name: '璺戦叿妯″紡',
    desc: '濂旇窇+纰版挒澹?,
    icon: '馃弮',
    category: 'scene',
    audioUrl: '/packageA/audio/璺戦叿妯″紡.mp3'
  },
  bengdi: {
    id: 'bengdi',
    name: '娣卞韫﹁开',
    desc: '澶滅尗瀛愬彨澹?,
    icon: '馃暫',
    category: 'scene',
    audioUrl: '/packageA/audio/娣卞韫﹁开.mp3'
  },
  chaojia: {
    id: 'chaojia',
    name: '鐚尗鍚垫灦',
    desc: '澶氱尗瀵瑰硻澹?,
    icon: '馃惐',
    category: 'scene',
    audioUrl: '/packageA/audio/鐚尗鍚垫灦.mp3'
  },
  qiukaimen: {
    id: 'qiukaimen',
    name: '姹傚紑闂?,
    desc: '鎶撻棬+鍙０',
    icon: '馃毆',
    category: 'scene',
    audioUrl: '/packageA/audio/姹傚紑闂?mp3'
  }
}

// 鍒嗙被閰嶇疆
const categories = [
  { key: 'role', name: '鐚挭瑙掕壊', icon: '馃惐' },
  { key: 'daily', name: '鏃ュ父浜掑姩', icon: '馃幃' },
  { key: 'emotion', name: '鎯呯华琛ㄨ揪', icon: '馃挄' },
  { key: 'scene', name: '瓒ｅ懗鍦烘櫙', icon: '馃幀' }
]

/**
 * 鏍规嵁鍒嗙被鑾峰彇闊抽鍒楄〃
 */
function getAudioByCategory(category) {
  return Object.values(audioData).filter(item => item.category === category)
}

/**
 * 鑾峰彇鎵€鏈夐煶棰戝垪琛?
 */
function getAllAudio() {
  return Object.values(audioData)
}

/**
 * 闅忔満鑾峰彇涓€涓煶棰?
 */
function getRandomAudio() {
  const allAudio = getAllAudio()
  const randomIndex = Math.floor(Math.random() * allAudio.length)
  return allAudio[randomIndex]
}

/**
 * 鏍规嵁ID鑾峰彇闊抽
 */
function getAudioById(id) {
  return audioData[id] || null
}

module.exports = {
  audioData,
  categories,
  getAudioByCategory,
  getAllAudio,
  getRandomAudio,
  getAudioById
}

