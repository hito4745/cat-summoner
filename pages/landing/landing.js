// 入口页 - 自动跳转到分包首页
Page({
  onLoad() {
    wx.redirectTo({
      url: '/packageA/pages/index/index'
    })
  }
})
