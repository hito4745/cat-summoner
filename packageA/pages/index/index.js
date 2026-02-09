// pages/index/index.js
const app = getApp()
const { categories, getAudioByCategory, getRandomAudio, getAudioById, getAllAudio } = require('../../audioData')

Page({
  data: {
    categories: categories,
    currentCategory: 'role',
    currentList: [],
    playingId: '',
    lastTappedId: '',
    volumePercent: 80,
    favorites: [],
    showPanel: '', // 'favorites' | 'history' | ''
    panelList: [],
    showTooltip: false,
    tooltipData: {}
  },

  // 音频上下文
  audioCtx: null,

  onLoad() {
    // 加载初始分类数据
    this.loadCategoryData('role')
    // 加载收藏列表
    this.loadFavorites()
    // 加载音量设置
    const volume = app.getVolume()
    this.setData({
      volumePercent: Math.round(volume * 100)
    })
  },

  onShow() {
    // 每次显示时刷新收藏列表
    this.loadFavorites()
  },

  onUnload() {
    // 页面卸载时销毁音频
    this.destroyAudio()
  },

  /**
   * 加载分类数据
   */
  loadCategoryData(category) {
    const list = getAudioByCategory(category)
    this.setData({
      currentCategory: category,
      currentList: list
    })
  },

  /**
   * 加载收藏列表
   */
  loadFavorites() {
    const favorites = app.getFavorites()
    this.setData({ favorites })
  },

  /**
   * 分类标签点击
   */
  onCategoryTap(e) {
    const category = e.currentTarget.dataset.category
    if (category === this.data.currentCategory) return
    this.loadCategoryData(category)
    // 提供触觉反馈
    wx.vibrateShort({ type: 'light' }).catch(() => {})
  },

  /**
   * 声音按钮点击
   */
  onSoundTap(e) {
    const id = e.currentTarget.dataset.id
    const audioInfo = getAudioById(id)
    if (!audioInfo) return

    // 触发点击动画
    this.setData({ lastTappedId: id })
    setTimeout(() => {
      this.setData({ lastTappedId: '' })
    }, 300)

    // 播放音频
    this.playAudio(audioInfo)

    // 提供触觉反馈
    wx.vibrateShort({ type: 'medium' }).catch(() => {})
  },

  /**
   * 声音按钮长按
   */
  onSoundLongPress(e) {
    const id = e.currentTarget.dataset.id
    const audioInfo = getAudioById(id)
    if (!audioInfo) return

    this.setData({
      showTooltip: true,
      tooltipData: audioInfo
    })

    // 提供触觉反馈
    wx.vibrateShort({ type: 'heavy' }).catch(() => {})
  },

  /**
   * 播放音频
   */
  playAudio(audioInfo) {
    // 停止当前播放
    this.destroyAudio()

    // 创建新的音频上下文
    const audioCtx = wx.createInnerAudioContext()
    this.audioCtx = audioCtx

    // 设置音量
    const volume = this.data.volumePercent / 100
    audioCtx.volume = volume

    // 设置音频源
    audioCtx.src = audioInfo.audioUrl

    // 监听播放开始
    audioCtx.onPlay(() => {
      this.setData({ playingId: audioInfo.id })
    })

    // 监听播放结束
    audioCtx.onEnded(() => {
      this.setData({ playingId: '' })
      this.destroyAudio()
    })

    // 监听播放错误
    audioCtx.onError((err) => {
      console.error('音频播放错误:', err)
      this.setData({ playingId: '' })
      this.destroyAudio()
      wx.showToast({
        title: '播放失败，请重试',
        icon: 'none',
        duration: 1500
      })
    })

    // 开始播放
    audioCtx.play()

    // 添加到播放历史
    app.addHistory(audioInfo.id)
  },

  /**
   * 销毁音频上下文
   */
  destroyAudio() {
    if (this.audioCtx) {
      try {
        this.audioCtx.stop()
        this.audioCtx.destroy()
      } catch (e) {
        // 忽略销毁错误
      }
      this.audioCtx = null
    }
  },

  /**
   * 随机播放
   */
  onRandomPlay() {
    const randomAudio = getRandomAudio()
    if (randomAudio) {
      // 切换到对应分类
      if (randomAudio.category !== this.data.currentCategory) {
        this.loadCategoryData(randomAudio.category)
      }
      // 触发点击动画
      this.setData({ lastTappedId: randomAudio.id })
      setTimeout(() => {
        this.setData({ lastTappedId: '' })
      }, 300)
      // 播放
      this.playAudio(randomAudio)
      // 提示
      wx.showToast({
        title: randomAudio.name,
        icon: 'none',
        duration: 1500
      })
    }
    // 触觉反馈
    wx.vibrateShort({ type: 'medium' }).catch(() => {})
  },

  /**
   * 音量变化
   */
  onVolumeChange(e) {
    const volumePercent = e.detail.value
    this.setData({ volumePercent })
    // 保存音量设置
    app.setVolume(volumePercent / 100)
    // 如果正在播放，实时调整音量
    if (this.audioCtx) {
      this.audioCtx.volume = volumePercent / 100
    }
  },

  /**
   * 切换收藏面板
   */
  onToggleFavorites() {
    if (this.data.showPanel === 'favorites') {
      this.onClosePanel()
      return
    }
    const favorites = app.getFavorites()
    const panelList = favorites.map(id => getAudioById(id)).filter(Boolean)
    this.setData({
      showPanel: 'favorites',
      panelList
    })
  },

  /**
   * 切换历史面板
   */
  onToggleHistory() {
    if (this.data.showPanel === 'history') {
      this.onClosePanel()
      return
    }
    const history = app.getHistory()
    const panelList = history.map(id => getAudioById(id)).filter(Boolean)
    this.setData({
      showPanel: 'history',
      panelList
    })
  },

  /**
   * 关闭面板
   */
  onClosePanel() {
    this.setData({
      showPanel: '',
      panelList: []
    })
  },

  /**
   * 面板项点击播放
   */
  onPanelItemTap(e) {
    const id = e.currentTarget.dataset.id
    const audioInfo = getAudioById(id)
    if (!audioInfo) return

    // 切换到对应分类
    if (audioInfo.category !== this.data.currentCategory) {
      this.loadCategoryData(audioInfo.category)
    }

    // 关闭面板
    this.onClosePanel()

    // 播放
    setTimeout(() => {
      this.setData({ lastTappedId: audioInfo.id })
      setTimeout(() => {
        this.setData({ lastTappedId: '' })
      }, 300)
      this.playAudio(audioInfo)
    }, 300)
  },

  /**
   * 关闭长按提示
   */
  onCloseTooltip() {
    this.setData({
      showTooltip: false,
      tooltipData: {}
    })
  },

  /**
   * 提示弹窗中播放
   */
  onTooltipPlay(e) {
    const id = e.currentTarget.dataset.id
    const audioInfo = getAudioById(id)
    if (audioInfo) {
      this.playAudio(audioInfo)
    }
    this.onCloseTooltip()
  },

  /**
   * 提示弹窗中收藏/取消收藏
   */
  onTooltipFav(e) {
    const id = e.currentTarget.dataset.id
    const favorites = this.data.favorites

    if (favorites.includes(id)) {
      app.removeFavorite(id)
      wx.showToast({ title: '已取消收藏', icon: 'none', duration: 1000 })
    } else {
      app.addFavorite(id)
      wx.showToast({ title: '已收藏', icon: 'none', duration: 1000 })
    }

    // 刷新收藏列表
    this.loadFavorites()
    this.onCloseTooltip()
  },

  /**
   * 分享功能
   */
  onShareAppMessage() {
    return {
      title: '🐱 猫咪召唤器 - 点击召唤你的猫咪！',
      path: '/pages/landing/landing'
    }
  },

  onShareTimeline() {
    return {
      title: '🐱 猫咪召唤器 - 点击召唤你的猫咪！'
    }
  }
})
