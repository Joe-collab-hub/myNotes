// 发送ajax请求
/*
 * 1.封装功能函数
 *   1.功能点明确
 *   2.函数内部应该保留固定代码（静态的）
 *   3.将动态的数据抽取参数，由使用者根据自身的情况动态传入实参
 *   4.良好的功能函数应该设置形参的默认值
 * 2.封装功能组件
 *   1.功能点明确
 *   2.函数内部应该保留固定代码
 *   3.将动态的数据抽取props参数，由使用者根据自身的情况动态传入props实参
 *   4.良好的功能组件应该设置组件的必要性及数据类型
 */

import config from './config'

export default (url, data = {}, method = 'GET') => {
    return new Promise((resolve, reject) => {
        // 1.new Promise初始化promise实例的状态pending
        wx.request({
            url: config.host + url,
            data,
            method,
            header: {
                cookie: wx.getStorageSync('cookies') ? wx.getStorageSync('cookies').
                        find(item => item.indexOf('MUSIC_U') !== -1) : '',
            },
            success: res => {
                // 判断是否是登录
                if (data.isLogin) {
                    // 将cookie存储到本地
                    wx.setStorage({
                        key: 'cookies',
                        data: res.cookies,
                    })
                }
                resolve(res.data) // 请求成功，返回数据
            },
            fail: err => {
                // console.log ('请求失败', err)
                reject(err) // 请求失败，返回错误信息
            },
        })
    })
}
