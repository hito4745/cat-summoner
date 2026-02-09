/**
 * 猫咪召唤器 - 音频数据映射表
 * 所有按钮配置信息
 */

const audioData = {
  // ===== 模块一：猫咪角色类 =====
  meiduan: {
    id: 'meiduan',
    name: '三岁美短小娇娘',
    desc: '娇滴滴的喵叫声',
    icon: '👑',
    category: 'role',
    audioUrl: '/audio/三岁美短小娇娘.mp3'
  },
  lihua: {
    id: 'lihua',
    name: '十八斤猛男狸花',
    desc: '低沉有力的叫声',
    icon: '💪',
    category: 'role',
    audioUrl: '/audio/十八斤猛男狸花.mp3'
  },
  buou: {
    id: 'buou',
    name: '傲娇布偶大小姐',
    desc: '高傲的喵声',
    icon: '👸',
    category: 'role',
    audioUrl: '/audio/傲娇布偶大小姐.mp3'
  },
  xianluo: {
    id: 'xianluo',
    name: '话痨暹罗小话痨',
    desc: '连续不断的喵喵声',
    icon: '🗣️',
    category: 'role',
    audioUrl: '/audio/话痨暹罗小话痨.mp3'
  },
  juzuo: {
    id: 'juzuo',
    name: '橘座大人',
    desc: '慵懒肥胖的叫声',
    icon: '🍊',
    category: 'role',
    audioUrl: '/audio/橘座大人.mp3'
  },
  heimao: {
    id: 'heimao',
    name: '黑猫警长',
    desc: '警觉的叫声',
    icon: '🕶️',
    category: 'role',
    audioUrl: '/audio/黑猫警长.mp3'
  },
  nainiu: {
    id: 'nainiu',
    name: '奶牛猫疯子',
    desc: '神经质的喵叫',
    icon: '🐄',
    category: 'role',
    audioUrl: '/audio/奶牛猫疯子.mp3'
  },

  // ===== 模块二：日常互动类 =====
  laiwan: {
    id: 'laiwan',
    name: '来玩呀',
    desc: '兴奋邀请的叫声',
    icon: '🎾',
    category: 'daily',
    audioUrl: '/audio/来玩呀.mp3'
  },
  kaifan: {
    id: 'kaifan',
    name: '开饭啦',
    desc: '急切讨食的叫声',
    icon: '🍽️',
    category: 'daily',
    audioUrl: '/audio/开饭啦.mp3'
  },
  momo: {
    id: 'momo',
    name: '摸摸头',
    desc: '满足的呼噜声',
    icon: '✋',
    category: 'daily',
    audioUrl: '/audio/摸摸头.mp3'
  },
  bugaoxing: {
    id: 'bugaoxing',
    name: '不高兴',
    desc: '抱怨的喵声',
    icon: '😾',
    category: 'daily',
    audioUrl: '/audio/不高兴.mp3'
  },
  biepeng: {
    id: 'biepeng',
    name: '别碰我',
    desc: '警告的低吼',
    icon: '⚠️',
    category: 'daily',
    audioUrl: '/audio/别碰我.mp3'
  },
  yaobao: {
    id: 'yaobao',
    name: '要抱抱',
    desc: '撒娇的叫声',
    icon: '🤗',
    category: 'daily',
    audioUrl: '/audio/要抱抱.mp3'
  },

  // ===== 模块三：情绪表达类 =====
  gaoxing: {
    id: 'gaoxing',
    name: '高兴',
    desc: '欢快的喵叫',
    icon: '😸',
    category: 'emotion',
    audioUrl: '/audio/高兴.mp3'
  },
  beishang: {
    id: 'beishang',
    name: '悲伤',
    desc: '哀怨的喵呜',
    icon: '😿',
    category: 'emotion',
    audioUrl: '/audio/悲伤.mp3'
  },
  jingya: {
    id: 'jingya',
    name: '惊讶',
    desc: '短促的喵声',
    icon: '😺',
    category: 'emotion',
    audioUrl: '/audio/惊讶.mp3'
  },
  shengqi: {
    id: 'shengqi',
    name: '生气',
    desc: '愤怒的哈气',
    icon: '😾',
    category: 'emotion',
    audioUrl: '/audio/生气.mp3'
  },
  kunle: {
    id: 'kunle',
    name: '困了',
    desc: '打哈欠声',
    icon: '😴',
    category: 'emotion',
    audioUrl: '/audio/困了.mp3'
  },
  haoqi: {
    id: 'haoqi',
    name: '好奇',
    desc: '疑惑的喵声',
    icon: '🤔',
    category: 'emotion',
    audioUrl: '/audio/好奇.mp3'
  },

  // ===== 模块四：趣味场景类 =====
  cainai: {
    id: 'cainai',
    name: '踩奶时间',
    desc: '踩奶+呼噜声',
    icon: '🐾',
    category: 'scene',
    audioUrl: '/audio/踩奶时间.mp3'
  },
  paoku: {
    id: 'paoku',
    name: '跑酷模式',
    desc: '奔跑+碰撞声',
    icon: '🏃',
    category: 'scene',
    audioUrl: '/audio/跑酷模式.mp3'
  },
  bengdi: {
    id: 'bengdi',
    name: '深夜蹦迪',
    desc: '夜猫子叫声',
    icon: '🕺',
    category: 'scene',
    audioUrl: '/audio/深夜蹦迪.mp3'
  },
  chaojia: {
    id: 'chaojia',
    name: '猫猫吵架',
    desc: '多猫对峙声',
    icon: '🐱',
    category: 'scene',
    audioUrl: '/audio/猫猫吵架.mp3'
  },
  qiukaimen: {
    id: 'qiukaimen',
    name: '求开门',
    desc: '抓门+叫声',
    icon: '🚪',
    category: 'scene',
    audioUrl: '/audio/求开门.mp3'
  }
}

// 分类配置
const categories = [
  { key: 'role', name: '猫咪角色', icon: '🐱' },
  { key: 'daily', name: '日常互动', icon: '🎮' },
  { key: 'emotion', name: '情绪表达', icon: '💕' },
  { key: 'scene', name: '趣味场景', icon: '🎬' }
]

/**
 * 根据分类获取音频列表
 */
function getAudioByCategory(category) {
  return Object.values(audioData).filter(item => item.category === category)
}

/**
 * 获取所有音频列表
 */
function getAllAudio() {
  return Object.values(audioData)
}

/**
 * 随机获取一个音频
 */
function getRandomAudio() {
  const allAudio = getAllAudio()
  const randomIndex = Math.floor(Math.random() * allAudio.length)
  return allAudio[randomIndex]
}

/**
 * 根据ID获取音频
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
