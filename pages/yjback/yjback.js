Page({

  /**
   * 页面的初始数据
   */
  data: {
      val:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },
  bindChange: function (e) {
    var input = e.detail.value; // 获取当前表单元素输入框内容
    this.setData=({
      val:input
    })
  },
  tijiao:function(){
    if(this.data.val){
      wx.showModal({
        title: '提示',
        content: '请输入您的意见！',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }else{
      wx.navigateBack({
        delta: 1
      })
    }
   
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})