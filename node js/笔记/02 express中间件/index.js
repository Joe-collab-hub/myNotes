// 构建一个服务器
const express = require('express');
const app = express();

// 一般情况下，我们需要登录后才能访问的接口，会验证token的存在与否，如果不存在，则会直接返回失败
// 但是这些重复的代码会让项目变的难以维护, 因此可以将这些代码封装成一个函数，每个请求都要先通过这个函数
// 可以使用中间件（请求处理管线）解决这个问题

function checkToken(req, res, next) {
    // 中间件函数有三个参数
    // req：请求信息
    // res：响应信息
    // next：让下一个处理函数执行的"函数"
    console.log('我是中间件');
    if (!req.query.token) {
        res.json({
            err: '请携带token'
        });
    } else {
        // next函数执行: 当前函数处理结束，让下一个处理函数开始工作
        // 如果不调用next，则后面的处理函数不会执行
        next();
    }
}

// 使用一个中间件，所有的请求都会通过这个函数,
app.use(checkToken);
app.use(function (req, res, next) {
    console.log('第二个公共的中间件');
    next();
});

// 查询用户信息
// express中间件：
// 一个接口被访问，会依次顺序执行接口中的处理函数，
app.get('/userinfo', function (req, res) {
    console.log('我是userinfo接口');
    res.json({
        msg: '这是用户信息'
    })
})
// 查询历史记录
app.get(
    '/history',
    function (req, res, next) {
        console.log('我是history的第二个中间件');
        next();
    },
    function (req, res) {
        console.log('我是history接口');
        res.json({
            msg: '这是历史记录'
        })
    }
)


app.listen(3000, function () {
    console.log('服务器启动成功，端口号为3000');
});