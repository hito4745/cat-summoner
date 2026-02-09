// app.js
App({
  onLaunch() {
    // 初始化本地存储
    this.initStorage()
  },

  /**
   * 初始化本地存储
   */
  initStorage() {
    // 初始化收藏列表
    if (!wx.getStorageSync('favorites')) {
      wx.setStorageSync('favorites', [])
    }
    // 初始化播放历史
    if (!wx.getStorageSync('history')) {
      wx.setStorageSync('history', [])
    }
    // 初始化音量设置
    if (!wx.getStorageSync('volume')) {
      wx.setStorageSync('volume', 0.8)
    }
  },

  /**
   * 添加到收藏
   */
  addFavorite(id) {
    let favorites = wx.getStorageSync('favorites') || []
    if (!favorites.includes(id)) {
      favorites.push(id)
      wx.setStorageSync('favorites', favorites)
    }
  },

  /**
   * 取消收藏
   */
  removeFavorite(id) {
    let favorites = wx.getStorageSync('favorites') || []
    const index = favorites.indexOf(id)
    if (index > -1) {
      favorites.splice(index, 1)
      wx.setStorageSync('favorites', favorites)
    }
  },

  /**
   * 获取收藏列表
   */
  getFavorites() {
    return wx.getStorageSync('favorites') || []
  },

  /**
   * 添加播放历史（最多保留5条）
   */
  addHistory(id) {
    let history = wx.getStorageSync('history') || []
    // 移除已存在的相同记录
    const index = history.indexOf(id)
    if (index > -1) {
      history.splice(index, 1)
    }
    // 添加到最前面
    history.unshift(id)
    // 只保留最近5条
    if (history.length > 5) {
      history = history.slice(0, 5)
    }
    wx.setStorageSync('history', history)
  },

  /**
   * 获取播放历史
   */
  getHistory() {
    return wx.getStorageSync('history') || []
  },

  /**
   * 设置音量
   */
  setVolume(volume) {
    wx.setStorageSync('volume', volume)
  },

  /**
   * 获取音量
   */
  getVolume() {
    return wx.getStorageSync('volume') || 0.8
  },

  globalData: {
    currentAudio: null // 当前播放的音频上下文
  }
})
