// pages/index/index.js
Page({
	
	/**
	 * 页面的初始数据
	 */
	data: {
		msg: '初始化测试数据',
		userInfo: {},
	},
	
	handleParent () {
		console.log('parent');
	},
	handleChild () {
		console.log('child');
	},
	
	// 跳转至logs页面的方法
	toLogs () {
		// wx.navigateTo({
		//   url: '/pages/logs/logs',
		// })
		// wx.redirectTo({
		//   url: '/pages/logs/logs',
		// })
		wx.reLaunch({
			url: '/pages/logs/logs',
		});
	},
	
	// 点击获取权限
	
	getUserProfile (res) {
		console.log(res);
		wx.getUserProfile({
			desc: '您的信息仅作为个人展示噢',
			success: (res) => {
				//获取用户信息的各类操作
				this.setData({
					userInfo: res.userInfo,
				});
			},
			fail: (res) => {
				console.log('获取用户信息失败', res);
				wx.showToast({
					title: '信息授权失败~',
					duration: 1000,
					icon: 'error',
					mask: true,
				});
			},
		});
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad (options) {
		console.log('onLoad');
		
		// 修改msg的状态数据
		// console.log(this.data.msg); // this 代表当前页面的实例对象
		
		// setTimeout(() => {
		//   this.setData({
		//     msg: '修改之后的数据'
		//   })
		//   // console.log(this.data.msg);
		// }, 2000)
		
		// 授权以后获取用户信息
		/* wx.getUserInfo({
			success: (res) => {
				console.log(res);
				this.setData({
					userInfo: res.userInfo,
				});
			},
		}); */
	}
	,
	
	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady () {
		console.log('onReady');
	}
	,
	
	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow () {
		console.log('onShow');
	}
	,
	
	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide () {
		console.log('onHide');
	}
	,
	
	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload () {
		console.log('onUnload');
	}
	,
	
	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh () {
	
	}
	,
	
	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom () {
	
	}
	,
	
	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage () {
	
	}
	,
})
;
