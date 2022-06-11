const HtmlWebpackPlugin = require("html-webpack-plugin");
// 导入代理中间件，自定义代理需要这个
const { createProxyMiddleware } = require('http-proxy-middleware');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// 默认情况下只能使用module.exports导出
module.exports = {
    mode: 'development',
    // 项目的入口文件，从哪里开始打包
    entry: './src/index.js',
    // 输出配置，打包完成的文件配置
    output: {
        filename: 'build.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        // new MiniCssExtractPlugin()
    ],
    // 配置webpack服务器
    devServer: {
        static: './dist',
        // 配置服务器代理   
        // proxy: {
        //     "/kuwo": {
        //         target: 'http://kuwo.cn',    // 代理的目标服务器（域名或ip加端口）
        //         changeOrigin: true,  // 启用来源伪装
        //         pathRewrite: {      // 路径重写
        //             "^/kuwo": ""
        //         }
        //     }
        // },
        // 需要在代理之前设置一些请求头信息，因此需要自定义服务器代理
        setupMiddlewares(middlewares) { // 自定义配置中间件，参数为已有的中间件
            // 创建代理中间件
            const proxy = createProxyMiddleware({
                target: 'http://kuwo.cn',    // 代理的目标服务器（域名或ip加端口）
                changeOrigin: true,  // 启用来源伪装
                pathRewrite: {      // 路径重写
                    "^/kuwo": ""    // 将 '/kuwo' 替换为 ''
                },
                onProxyReq(req) {   // 请求发送前调用，用来设置请求头
                    // 为通过酷我验证设置请求头
                    req.setHeader('csrf', '3NEYPHJY7N4');
                    req.setHeader('Cookie', 'kw_token=3NEYPHJY7N4');
                }
            });
            // 使用该中间件
            middlewares.push({
                path: '/kuwo',  // 使用该中间件的路径
                middleware: proxy   // 中间件配置
            });
            // 返回中间件列表
            return middlewares;
        }
    },
   
}
