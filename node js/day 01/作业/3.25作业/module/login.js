/*
    登录接口
    code: 状态 0 表示失败, 1 表示成功
    msg: 提示信息
*/
const fs = require('fs');
const jwt = require('jsonwebtoken');

module.exports = function (req, res) {
    // 根据传入的username和password做校验即可
    fs.readFile('./data/user.json', function (err, data) {
        if (!err) {
            // 读取用户信息并解析为对象
            // 为了防止该文件的内容为空，导致json解析错误，给上一个默认值 '[]'
            data = JSON.parse(data.toString() || '[]');
            
            // 寻找名字对应的对象
            let nowUser = data.find(function (userInfo) {
                return userInfo.username === req.body.username;
            });
            console.log(req.body.username);

            // 为了防止未注册就登录导致的nowUser是undefined，需要给一个默认值
            // if(nowUser === undefined) nowUser = {};
            // 也可以简写为
            nowUser = nowUser || {};

            // 如果密码相同
            if (nowUser.password === req.body.password) {
                res.json({
                    code: 1,
                    msg: '登录成功',
                    // 生成token
                    token: jwt.sign(nowUser, 'woShiYiGeMiYao,ZheGeShuJuShiYongWoLaiJinXingJiaMi')
                })
            } else {
                // 否则
                res.json({
                    code: 0,
                    msg: '用户名或密码错误'
                })
            }
        }
    })
}