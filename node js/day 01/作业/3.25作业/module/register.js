const fs = require('fs');
/*
    code: 状态 0 表示失败, 1 表示成功
    msg: 提示信息
*/
module.exports = function (req, res) {
    // 函数参数中req,res分别表示请求和响应
    // req.query中存储了路径后面跟的参数

    // 先读取之前存储的用户信息
    fs.readFile('./data/user.json', function (err, data) {
        if (!err) {
            // 读取用户信息并解析为对象
            // 为了防止该文件的内容为空，导致json解析错误，给上一个默认值 '[]'
            data = JSON.parse(data.toString() || '[]');
            // 先做同名的校验，禁止注册同名用户
            for (let i = 0; i < data.length; i++) {
                // 判断名字是否相同
                if (data[i].username === req.body.username) {
                    res.json({
                        code: 0,
                        msg: '用户名重复'
                    });
                    // 每个请求只能响应一次，因此，响应完成之后需要return结束函数运行，否则下面的res.json还会继续响应
                    return; // 结束函数执行
                }
            }
            // 添加用户信息
            data.push({
                username: req.body.username,
                password: req.body.password
            });
            // 因为该函数是在index.js中执行的，因此路径也应该基于index.js去查找
            // 写入到user.json中
            fs.writeFile('./data/user.json', JSON.stringify(data), function (err) {
                if (!err) {
                    res.json({
                        code: 1,
                        msg: '注册成功!',
                    });
                } else {
                    console.log(err);
                    res.json({
                        code: 0,
                        msg: '保存失败',
                    });
                }
            });
        } else {
            console.log(err);
        }
    });
}