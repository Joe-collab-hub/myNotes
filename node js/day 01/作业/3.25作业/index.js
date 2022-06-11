// 导入 express 模块用于创建服务器
const express = require('express');
const bodyparser = require('body-parser');
// 初始化服务器, 拿到服务器实例
const app = express();

// 解决跨域问题
const cors = require('cors')
app.use(cors())

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());


// 使用 app.get 来制作一个get接口
// 参数1：路径
// 参数2：接受到请求的处理函数
// 接口可以使用 http://127.0.0.1:端口号/路径 访问
// 例:  http://127.0.0.1:3000/register
app.post('/register', require('./module/register')); // 如果引入的是js文件,后缀可以省略
app.post('/login', require('./module/login'));
app.get('/userInfo', require('./module/userinfo'))

// 将服务器启动在3000端口, 启动成功之后调用参数2的函数
app.listen(3000, function () {
    console.log('服务器启动成功! 部署在3000端口');
});
