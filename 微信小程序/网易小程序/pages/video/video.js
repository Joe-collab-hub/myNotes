// pages/video/video.js
import request from '../../utils/request';

Page({
    
    /**
     * 页面的初始数据
     */
    data: {
        videoGroupList: [],
        navId: 0,
        videoListData: [],
        videoId: '',
        videoUpDataTime: [],
        isEnabled: false,
        offset: 0,
    },
    
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad (options) {
        // 判断用户是否登录
        let userInfo = wx.getStorageInfoSync()
        if (!userInfo) {
            wx.showToast({
                title: '请先登录！',
                icon: 'none',
                success: () => {
                    // 跳转登录界面
                    wx.reLaunch({
                        url: '/pages/login/login',
                    })
                },
            })
        }
        this.getVideoGroupListData();
    },
    
    // 获取导航数据
    async getVideoGroupListData () {
        let videoGroupList = await request('/video/group/list');
        this.setData({
            videoGroupList: videoGroupList.data.slice(0, 15),
            navId: videoGroupList.data[0].id,
        });
        
        // 获取视频列表数据
        let { navId, offset } = this.data
        this.getVideoList(navId, offset);
    },
    
    // 点击导航跳转到视频列表页面
    changeNav (event) {
        let navId = event.currentTarget.id;
        let { offset } = this.data
        offset = 0
        // 获取当前导航的视频列表
        this.getVideoList(navId, offset);
        
        this.setData({
            navId: navId * 1,
            videoListData: [],
            offset
        });
        
        // 显示正在加载
        wx.showLoading({
            title: '正在加载',
        });
        
    },
    
    // 获取视频数据
    async getVideoList (navid, offset) {
        let videoListData = await request('/video/group', { id: navid, offset });
        let index = 0;
        videoListData = videoListData.datas.map((item) => {
            item.id = index++;
            return item;
        });
        
        // 取消正在加载
        wx.hideLoading();
        
        this.setData({
            videoListData,
            isEnabled: false, // 关闭下拉刷新
        });
    },
    
    // 点击播放 / 继续播放的回调
    playVideo (event) {
        /*
         * 问题：多个视频同时播放的问题
         * 需求：
         *      1、在点击播的事件中需要找到上一个播放的视频
         *      2、在播放新的视频之前关掉上一个正在播放的视频
         * 关键：
         *      1、如何找到上一个视频的实例对象
         *      2、如何确认点击播放视频和继续播放视频不是同一个视频
         * 单调模式：
         *      1、需要创建多个对象的场景，通过一个变量接收，始终保持只有一个对象
         *      2、节省空间
         * */
        let vid = event.currentTarget.id;
        // 关闭上一个视频
        // if (this.vid !== vid) {
        //     this.videoContext && this.videoContext.stop();
        // }
        // this.vid = vid;
        this.setData({
            videoId: vid,
        });
        // 打开新的视频
        this.videoContext = wx.createVideoContext(vid);
        
        let videoItem = this.data.videoUpDataTime.find(item => item.vid === vid);
        if (videoItem) {
            // 从当前时间播放
            this.videoContext.seek(videoItem.currentTime)
        } else {
            this.videoContext.play()
        }
    },
    
    // 监听视频的播放进度的回调
    handTimeUpData (event) {
        let videoTimeObj = {
            vid: event.currentTarget.id,
            currentTime: event.detail.currentTime,
        }
        let { videoUpDataTime } = this.data;
        /*
         *	思路：判断记录播放的时长的videoUpDataTime数组中是否有当前视频的播放记录
         *      1、如果有，在原有的播放记录中修改播放记录
         *      2、如果没有，需要在原数组中添加当前的播放记录
         */
        let videoItem = videoUpDataTime.find(item => item.vid === videoTimeObj.vid)
        if (videoItem) {
            videoItem.currentTime = event.detail.currentTime
        } else {
            videoUpDataTime.push(videoTimeObj)
        }
        this.setData({
            videoUpDataTime,
        })
    },
    
    // 视频播放结束时的回调
    handleEnded (event) {
        let { videoUpDataTime } = this.data;
        videoUpDataTime.splice(videoUpDataTime.findIndex(item => item.vid === event.currentTarget.id), 1)
        this.setData({
            videoUpDataTime,
        })
    },
    
    // 自定义下拉刷新的回调
    handleReFresher () {
        this.setData({
            isEnabled: true, // 开启下拉刷新
        })
        this.getVideoList(this.data.navId, this.data.offset)
    },
    
    // 上拉触底加载数据
    async handleToLower () {
        // 数据分页：前端分页 （数据截取），后端分页（传递参数形式，获取数据）
        let { videoListData, navId, offset } = this.data
        offset += 1
        let nawVideoList = await request('/video/group', { id: navId, offset });
        // 叫最新的数据跟新在原有的视频列表中
        videoListData.push(...nawVideoList.datas)
        this.setData({
            videoListData,
            offset,
        })
    },
    
    // 点击跳转search页面
    jumpSearch () {
        wx.navigateTo({
            url: '/pages/search/search',
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
        console.log('下拉动作')
    },
    
    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom () {
        console.log('上拉触底')
    },
    
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage () {
        var that = this;
        console.log(JSON.stringify(that.data.array))
        return {
            title: 'sjkdhfks',
            path: '',
            imageUrl: '/static/images/nvsheng.jpg',
        }
    },
})
