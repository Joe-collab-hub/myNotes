前端自动化构建工具
    1. 合并和压缩文件
    2. 编译文件（es6、sass、less）
    3. 可以使用模块化开发（commonjs、es模块规范）
   
还可以在项目开发过程中实时预览项目
项目开发完成打包生成终的代码



## 使用方法
1. 创建一个空的项目
    
    `# npm init`
2. 安装webpack所需依赖包, webpack和webpack-cli

    `# npm i webpack webpack-cli --save-dev`
3. 创建一个`webpack.config.js`文件用于配置`webpack`,就是告诉webpack我们的项目该如何打包
4. 在`package.json`文件中配置命令别名
   ```
   "scripts": {
       "build": "webpack"
   }
   ```
5. 执行 `# npm run build` 开始打包 


### 插件使用    plugin
**插件可以给予webpack更加强大的功能**
- 自动将打包的文件导入进HTML的插件
    ```
    # npm i html-webpack-plugin --sav-dev

    // webpack.config.js
    
    ```
### 预览服务
```
# npm i webpack-dev-server --save-dev

// webpack.config.js
devServer: {
    static: './dist'    // 指定服务目录
}
```

### 加载器 loader
loader赋予了webpack更加强大的功能，允许我们导入任何类型的文件进行处理打包，但是都需要配置响应的loader
- 处理css：css-loader、style-loader https://webpack.docschina.org/loaders/css-loader#root
    
    `# npm i css-loader style-loader -D`

- 处理 sass和scss

    `# npm i sass-loader sass -D`

- 分开打包css文件，将css单独打包出一个文件

    `# npm i mini-css-extract-plugin -D`

- 处理es6代码：babel-loader https://webpack.js.org/loaders/babel-loader/#root

    `# npm i babel-loader @babel/core @babel/preset-env -D` &emsp; 安装babel-loader和babel相关依赖


### webpack服务器代理

`# npm i http-proxy-middleware -D`

## tips
执行的安装命令
```
# npm i webpack-dev-server --save-dev
# npm i webpack-dev-server -D   // 简写

# npm i jquery
```
带有 `--save-dev` 后缀的安装命令，会在package.json中的  `devDependencies` 属性中记录

没带 `--save-dev` 后缀的安装命令，会在package.json中的  `dependencies` 属性中记录

如果一个依赖包记录在`devDependencies`中，则表示该依赖包仅仅在开发过程中使用，`dependencies`表示在生产过程中也要使用，根据情况而定

