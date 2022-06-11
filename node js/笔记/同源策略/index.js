// 构建一个服务器
const express = require('express');

// 初始化
const app = express();
// 使用静态文件夹
// 给服务器指定静态文件夹之后，发生的访问操作会默认读取该静态文件夹中的资源
// 例：127.0.0.1:3000/test.html     =>  访问到 public/test.html
// 如果未指定路径，则会默认访问     public/index.html
app.use(express.static('public'));


// 定义一个接口
app.get('/test', function (req, res) {
    // 配置cors响应头
    res.header({
        // 配置允许跨源访问的域名， * 表示允许所有
        'Access-Control-Allow-Origin': '*',
        // 允许跨源访问的请求方式
        'Access-Control-Allow-Methods': 'GET,POST,DELETE,PUT,OPTIONS'
    });
    res.json({
        msg: '你如果能看到我这句话，说明你的get请求成功了'
    });
})
// 定义一个接口
app.post('/test', function (req, res) {
    // 配置cors响应头
    res.header({
        // 配置允许跨源访问的域名， * 表示允许所有
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,DELETE,PUT,OPTIONS'
    });
    res.json({
        msg: '你如果能看到我这句话，说明你的post请求成功了'
    });
})


app.listen(3000, function () {
    console.log('服务器启动成功，端口号为3000');
});