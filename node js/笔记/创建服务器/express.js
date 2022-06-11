/**
 * Time:2022/3/24 20:35 02
 * Name:express.js
 * Path:node js/笔记/创建服务器
 * ProjectName:前端
 * Author:突然
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

// 引入 express
let express = require('express')

// 创建应用对象
let app = express()


// 创建路由规则
// request  是对请求报文的封装请求
// response  是对响应报文的封装请求
app.get('/',(req,res)=>{

})



// 监听端口启动服务
app.listen(3000,()=>{
	console.log('服务器已启动，3000端口正在监听....');
})

