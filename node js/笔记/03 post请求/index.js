const express = require('express');
const bodyParser = require('body-parser');  // 导入body解析模块
const app = express();

// 使用body解析中间件
app.use(bodyParser.urlencoded({ extended: false }));    // 解析urlencoded类型的数据 name=张三&age=18
app.use(bodyParser.json()); // 解析json类型的数据   { "name": "张三, "age": 18 }

// req.query：存储的是请求路径后跟随的参数
app.get('/list', function (req, res) {
    res.json({
        msg: '我是get请求的结果',
        data: req.query
    })
});

app.post('/list', function (req, res) {
    // 请求体的数据存储在req.body中，但是必须要先使用中间件来进行解析才有
    console.log('请求体中的数据为', req.body);
    res.json({
        msg: '我是post请求的结果',
        data: req.query,
        body: req.body
    })
});


app.listen(3001, function () {
    console.log('启动成功');
});