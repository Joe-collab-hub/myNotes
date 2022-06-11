// 导入对应的插件
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 打包的模式    
    // development 开发模式：正在开发过程中，打包速度会更快，但是文件体积较大，方便调试     
    // production  生产模式：开发完成打包模式，打包速度稍慢，但是文件体积极小，方便网络传输
    mode: 'production',
    // 项目的入口文件，从哪里开始打包
    entry: './index.js',
    // 输出配置，打包完成的文件配置
    output: {
        filename: 'build.js'
    },
    plugins: [   // 配置插件
        // new HtmlWebpackPlugin() // 不传参自动生成html并导入对应资源
        new HtmlWebpackPlugin({
            template: './index.html' // 指定模板，将该html复制并导入对应的资源
        })
    ],
    // 配置预览服务器
    devServer: {
        static: './dist'    // 指定服务目录
    }
}