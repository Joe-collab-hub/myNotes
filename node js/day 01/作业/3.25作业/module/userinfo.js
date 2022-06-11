// 获取用户信息,其实就是将传入的token解密并返回
const jwt = require('jsonwebtoken');
module.exports = function (req, res) {
    jwt.verify(
        req.query.token,    // 前端发送过来的token
        'woShiYiGeMiYao,ZheGeShuJuShiYongWoLaiJinXingJiaMi',    // 密钥
        function (err, data) {  // 解析完成的回调函数
            if (!err) {
                console.log('解密成功,数据为', data);
                res.json({
                    code: 1,
                    data: data
                })
            } else {
                console.log(err);
                res.json({
                    code: 1,
                    data: 'token已失效'
                })
            }
        }
    )
}