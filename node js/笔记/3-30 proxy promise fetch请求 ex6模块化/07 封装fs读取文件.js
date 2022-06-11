const fs = require('fs');

function myReadFile(url) {
    return new Promise(resolve => {
        fs.readFile(url, function (err, data) {
            if(!err){   // 如果没有错误信息
                resolve(data);  // 传参
            }
        })
    });
}

myReadFile('./06 图片异步加载的封装.html')
    .then(data => {
        console.log(data.toString());
    })