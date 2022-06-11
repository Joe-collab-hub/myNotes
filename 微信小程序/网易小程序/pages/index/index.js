// pages/index/index.js

import request from '../../utils/request';

Page ({
	
	/**
	 * 页面的初始数据
	 */
	data: {
		bannerList: [],
		recommendScrollList: [],
		topList: [],
	},
	
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: async function (options) {
		let bannerListData = await request ('/banner', { type: 2 });
		this.setData ({
			bannerList: bannerListData.banners,
		});
		
		let recommendScrollListData = await request ('/personalized',{ limit: 12 });
		this.setData ({
			recommendScrollList: recommendScrollListData.result,
		});
		
		let index = 0;
		let resultArr = [];
		while (index < 5) {
			let topListData = await request ('/top/list', { idx: index++ });
			let topListItem = {name:topListData.playlist.name,tracks:topListData.playlist.tracks.slice(0,3)};
			resultArr.push(topListItem);
			// 不需要等待5次请求结束在跟新，用户体验会好很多
			this.setData ({
				topList: resultArr,
			});
		}
		// 请求过程时间较长 用户体验差
		/* this.setData ({
			topList: resultArr,
		}); */
	},
	
	
	toRecommendSong(){
		wx.navigateTo({
			url: '/pages/recommendSong/recommendSong'
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
