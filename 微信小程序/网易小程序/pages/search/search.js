// pages/search/search.js
import request from '../../utils/request';

Page({
    
    /**
     * 页面的初始数据
     */
    data: {
        placeholderContainer: '', //placeholder默认值
        hotList: [], // 热搜榜数据
        searchData: '', // 用户输入表单下的数据
        searchContent: [], // 模糊查询返回的数据
        historyList: [],  // 历史记录
    },
    
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad (options) {
        // 调用getInitData获取数据
        this.getInitData()
        
        // 初始化历史记录
        this.getRecords()
    },
    
    // 获取搜索框的默认值、热搜榜数据的回调
    async getInitData () {
        // 搜索默认值
        let placeholderContainer = await request('/search/default');
        // 热搜列表
        let hotList = await request('/search/hot/detail');
        
        this.setData({
            placeholderContainer: placeholderContainer.data.showKeyword,
            hotList: hotList.data,
        })
    },
    
    // 模糊匹配回调
    headerInputChange (event) {
        let { value, keyCode } = event.detail;
        this.setData({
            searchData: value,
        })
        
        if (this.timer) clearTimeout(this.timer)
        
        this.timer = setTimeout(() => {
            this.getSearchList()
            this.timer = null
        }, 300)
    },
    
    // 搜索功能函数
    async getSearchList () {
        let { searchData } = this.data
        if (searchData.trim()) {
            let searchContent = await request('/search', { keywords: this.data.searchData, limit: 10 })
            this.setData({
                searchContent: searchContent.result.songs,
            })
        } else {
            this.setData({
                searchContent: [],
            })
        }
    },
    
    // 搜索的回调函数
    getSearch () {
        let { searchData, historyList } = this.data;
        if (searchData) return
        if (historyList.indexOf(searchData) !== -1) {
            historyList.splice(historyList.indexOf(searchData), 1)
        }
        historyList.unshift(searchData)
        wx.setStorageSync('history', historyList)
        this.getRecords()
    },
    
    // 获取本地储存历史记录
    getRecords () {
        let { historyList } = this.data;
        this.setData({
            historyList: wx.getStorageSync('history') || [],
            searchData: '',
            searchContent: [],
        })
        
    },
    
    // 删除历史记录
    deleteSave () {
        wx.revokeBufferURL('history')
        this.setData({
            historyList: [],
        })
    },
    
    // 清空input框
    getDelete () {
        this.setData({
            searchData: '',
            searchContent: [],
        })
    },
    
    // 搜索内容点击输入框显示
    addSearch (event) {
        let searchData = event.currentTarget.id
        this.setData({
            searchData,
        })
        this.getSearchList()
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
