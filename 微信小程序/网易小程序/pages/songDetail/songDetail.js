"// pages/songDetail/songDetail.js"

import PubSub from 'pubsub-js';
import moment from 'moment';
import request from '../../utils/request';

const appInstance = getApp();

Page({
    
    /**
     * 页面的初始数据
     */
    data: {
        isPlay: false, // 开关
        song: [], // 歌曲详细
        musicId: '', // 歌曲id
        musicLink: '', // 歌曲链接
        currentTime: '00:00', // 实时时长
        durationTime: '00:00', // 总时长
        currentWidth: 0,
    },
    
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad (options) {
        this.setData({
            musicId: options.id * 1,
        });
        this.getMusicInfo(options.id);
        
        // 创建控制音乐的实例对象
        this.backgroundAudioManager = wx.getBackgroundAudioManager();
        
        // 判断当前的音乐是否在播放
        if (appInstance.globalData.isMusicPlay && appInstance.globalData.musicId === options.id * 1) {
            this.setData({
                isPlay: true,
            });
            this.add()
        }
        // 音乐播放的监听事件
        this.backgroundAudioManager.onPlay(() => {
            this.changePlayState(true);
            // 修改全局音乐播放的状态
            // appInstance.globalData.musicId = options.id;
        });
        // 音乐暂停的监听事件
        this.backgroundAudioManager.onPause(() => {
            this.changePlayState(false);
        });
        // 音乐停止的监听事件
        this.backgroundAudioManager.onStop(() => {
            this.changePlayState(false);
        });
        
        // 音乐自动播放结束监听事件
        this.backgroundAudioManager.onEnded(() => {
            PubSub.publish('switchType', 'next');
            this.setData({
                currentWidth: 0,
                currentTime: '00:00'
            })
        })
        
        // 订阅来自recommendSong页面发布的消息
        this.token = PubSub.subscribe('switchId', (_, id) => {
            this.getMusicInfo(id);
            this.musicControl(true, id);
            this.add()
            this.setData({
                musicId: id
            })
        });
    },
    
    add(){
        // 音乐播放的进度监听事件
        this.backgroundAudioManager.onTimeUpdate(() => {
            let currentTime = moment(this.backgroundAudioManager.currentTime * 1000).format('mm:ss')
            let currentWidth = this.backgroundAudioManager.currentTime / this.backgroundAudioManager.duration*450
            this.setData({
                currentTime,
                currentWidth,
            })
        })
    },
    
    // 修改播放状态的回调
    changePlayState (isPlay) {
        this.setData({
            isPlay,
        });
        // 修改全局音乐播放的状态
        appInstance.globalData.isMusicPlay = isPlay;
    },
    
    // 是否播放 / 暂停的回调
    handleMusicPlay () {
        let { isPlay } = this.data;
        /* this.setData({
            isPlay: !isPlay,
        }); */
        let { musicLink, musicId } = this.data;
        this.musicControl(!isPlay, musicId, musicLink);
    },
    
    // 获取音乐详情回调
    async getMusicInfo (id) {
        let song = await request('/song/detail', { ids: id });
        
        // song.songs[0].dt 歌曲的时长 单位 ms
        let durationTime = moment(song.songs[0].dt).format('mm:ss')
        this.setData({
            song: song.songs[0],
            durationTime,
        });
        wx.setNavigationBarTitle({
            title: this.data.song.name,
        });
    },
    
    // 控制播放 / 暂停 的回调函数
    async musicControl (isPlay, id, musicLink) {
        appInstance.globalData.musicId = id;
        if (isPlay) { // 音乐播放
            if (!musicLink) {
                let musicLinkData = await request('/song/url', { id });
                musicLink = musicLinkData.data[0].url;
                this.setData({
                    musicLink,
                });
                this.add()
            }
            this.backgroundAudioManager.src = musicLink;
            this.backgroundAudioManager.title = this.data.song.name;
        } else { // 音乐暂停
            this.backgroundAudioManager.pause();
        }
    },
    
    // 点击切歌的回调
    handleSwitch (event) {
        // 获取切歌的类型
        let type = event.currentTarget.id;
        this.backgroundAudioManager.pause();
        // 发布消息
        PubSub.publish('switchType', type);
        
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
