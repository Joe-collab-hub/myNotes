const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: 'build.js',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html',
		}),
		new MiniCssExtractPlugin()],
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
	
	module: {
		rules: [
			{
				test: /\.css$/, // use 指定使用的加载器，执行顺序：从右往左
				// css-loader       解析css文件
				// style-loader     将打包后的css写入到页面的style标签中
				// MiniCssExtractPlugin.loader  将css单独打包成一个文件，用来替代 style-loader
				// use: ['style-loader', 'css-loader']
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			}, {
				test: /\.(scss|sass)$/, // 从右往左
				// sass-loader      将sass或scss文件解析成css文件
				// use: ['style-loader', 'css-loader', 'sass-loader']
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
			}, {
				test: /\.js$/,  // 匹配 .js 结尾的文件
				exclude: /node_module/,    // 规定哪些文件不需要该loader解析
				use: {
					loader: 'babel-loader', options: {  // 配置babel-loader
						presets: ['@babel/preset-env'],  // 设置babel解析模块
					},
				},
			}, {
				// 处理静态资源 图片、视频、音频、字体等等
				test: /\.(png|gif|jpg|svg|mp3|mp4|ttf)$/, type: 'asset/resource',
			}],
	},
};
