// pages/personal/personal.js

import request from '../../utils/request'

let starty = 0  // 起始坐标
let moveY = 0  // 起始坐标
let moveDistance = 0  // 移动距离

Page({
    
    /**
     * 页面的初始数据
     */
    data: {
        coverTransForm: 'translateY(0)',
        coverTransition: '',
        userInfo: {},
        judge: false,
        recentPlayList: [],
    },
    
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad (options) {
        // 读取用户的基本信息
        let userInfo = JSON.parse(wx.getStorageSync('userInfo'))
        if (userInfo) {
            this.setData({
                userInfo,
                judge: true,
            })
            
            // 读取用户的最近播放列表
            this.getRecentPlayList(userInfo.userId)
        }
    },
    
    // 跳转登录页面
    toLogin () {
        wx.navigateTo({
            url: '/pages/login/login',
        })
    },
    
    // 获取用户的最近播放列表函数
    async getRecentPlayList (userid) {
        let recentPlayListData = await request('/user/record', { uid: userid, type: 0 })
        let index = 0
        let recentPlayList = recentPlayListData.allData.slice(0, 10).map((item) => {
            item.id = index++
            return item
        })
        this.setData({
            recentPlayList,
        })
    },
    
    // 滑动开始
    touchStart (event) {
        starty = event.touches[0].pageY
        this.setData({
            coverTransition: 'transform 0.3s',
        })
    },
    
    // 滑动中
    touchMove (event) {
        moveY = event.touches[0].pageY
        moveDistance = moveY - starty
        if (moveDistance < 0) {
            return
        } else if (moveDistance > 100) {
            moveDistance = 100
        }
        this.setData({
            coverTransForm: `translateY(${moveDistance}rpx)`,
        })
    },
    
    // 滑动结束
    touchEnd () {
        this.setData({
            coverTransForm: `translateY(0)`,
            coverTransition: 'transform 0.5s',
        })
    },
    
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady () {
    },
    
    /**
     * 生命周期函数--监听页面显示
     */
    onShow () {
    },
    
    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide () {
    
    },
    
    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload () {
    
    },
    
    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh () {
    
    },
    
    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom () {
    
    },
    
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage () {
    
    },
})
