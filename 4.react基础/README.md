# 项目构建
- git& github
- nodejs环境
- 编辑器 atom/webstorm
- chrome
- shell
- babel preset plugin
- es6 -> es5
- webpack
- ...

## react
-  npm install webpack webpack-dev-server --save-dev
-  npm install babel babel-core babel-loader babel-preset-es2015 babel-preset-react --save-dev
   - 配置babel-loader
   ```
   module:{
           loaders: [
               {
                   test: /\.js$/,
                   loader: 'babel-loader',
                   exclude: /node_modules/
               }
           ]
       }
    ```
-  npm install react react-dom --save-dev
    ```
       {
         "presets": ["es2015", "react"]
       }
   ```
   
-  npm install style-loader css-loader --save-dev


## 组件
- 组件定义
- 数据流动
- props 组件间的数据传递
- state 管理组件自己内部的数据