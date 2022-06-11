// pages/recommendSong/recommendSong.js
import PubSub from 'pubsub-js';
import request from '../../utils/request';

Page({
    
    /**
     * 页面的初始数据
     */
    data: {
        time: {
            day: '', // 天
            month: '', // 月
        },
        recommendList: [],
        index: 0,
    },
    
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad (options) {
        // 判断用户是否登录
        let userInfo = wx.getStorageInfoSync();
        if (!userInfo) {
            wx.showToast({
                title: '请先登录！',
                icon: 'none',
                success: () => {
                    // 跳转登录界面
                    wx.reLaunch({
                        url: '/pages/login/login',
                    });
                },
            });
        }
        // 跟新时间
        this.setData({
            time: {
                day: new Date().getDate(),
                month: new Date().getMonth() + 1,
            },
        });
        
        // 获取每日数据
        this.getRecommendList();
        // 订阅来自songDetail页面发布的消息
        this.token = PubSub.subscribe('switchType', (_, data) => {
            let { recommendList, index } = this.data;
            if (data === 'pre') { // 上一首
                index -= 1;
                if (index < 0) {
                    index = recommendList.length - 1;
                }
            } else { // 下一首
                index += 1;
                if (index > recommendList.length - 1) {
                    index = 0;
                }
            }
            this.setData({
                index,
            });
            let id = recommendList[index].id;
            // 将id回传给songDetail页面
            PubSub.publish('switchId', id);
        });
    },
    
    // 获取每日数据回调
    async getRecommendList () {
        let recommendList = await request('/recommend/songs');
        this.setData({
            recommendList: recommendList.recommend,
        });
    },
    
    // 点击跳转songDetail页面
    toSongDetail (event) {
        let { id, index } = event.currentTarget.dataset;
        wx.navigateTo({
            url: '/pages/songDetail/songDetail?id=' + id,
        });
        this.setData({
            index,
        });
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
        PubSub.unsubscribe(this.token);
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
});
