// config： 配置

// 该文件需要导出一个配置对象
// 默认情况下只能使用module.exports导出
module.exports = {
    // 项目的入口文件，从哪里开始打包
    entry: './index.js',
    // 输出配置，打包完成的文件配置
    output: {
        filename: 'build.js'
    }
}