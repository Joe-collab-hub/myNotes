// 导入对应的插件
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
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
    ]
}