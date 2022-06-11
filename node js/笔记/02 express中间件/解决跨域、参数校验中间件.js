const express = require('express');
const cors = require('cors');   // 设置cors头的插件

const app = express();

// 给所有的接口添加中间件，设置cors头解决跨域
// app.use(function (req, res, next) {
//     // 设置cors响应头
//     res.header({
//         // 配置允许跨源访问的域名， * 表示允许所有
//         'Access-Control-Allow-Origin': '*',
//         // 允许跨源访问的请求方式
//         'Access-Control-Allow-Methods': 'GET,POST,DELETE,PUT,OPTIONS'
//     });
//     next();
// });
// 以上代码也可以通过cors插件来解决
app.use(cors());

// 校验传入的参数是否足够
function check(arr) {
    return function (req, res, next) {
        for (let i = 0; i < arr.length; i++) {
            // 判断请求参数中是否拥有要求的属性
            const shuxing = arr[i];
            // 如果有参数缺失，立即响应并结束函数执行
            if (req.query[shuxing] === undefined) {
                res.json({
                    code: 0,
                    msg: shuxing + '参数缺失'
                })
                return;
            }
        }
        // 进入下一个函数执行
        next();
    }
}

// 校验登录接口必须有username和password
app.get('/login', check(['username', 'password']),    // 调用check函数生成新的函数，新的函数当作中间件
    function (req, res) {
        res.json({
            code: 1,
            msg: '登录成功'
        });
    }
)
// 校验用户信息接口必须有token
app.get('/userinfo', check(['token']), function (req, res) {
    res.json({
        code: 1,
        msg: '用户信息'
    })
})

app.listen(3001, function () {
    console.log('启动成功');
})