# 项目开发指导

## 基本环境

## 依赖技术点
- webpack
- babel 语法解析
- es6/7 基本语法
- eslint 语法检查  npm install eslint --save-dev
    ```
    ./node_modules/.bin/eslint --init
    
    会自动安装eslint-plugin-react
    
    ```
    -- 使用
    ```
    ./node_modules/.bin/eslint src/
    
     ./node_modules/.bin/eslint src/ --fix

     ```

- npm scripts 统一的任务构建
- react 组件化基础类库 



## 如何开发

```
1. npm install

2. npm run build
```
## 使用es6
###webpack + babel
        ```
           npm install babel-loader babel-core babel-preset-es2015 --save-dev
        
        ```
        - webpack配置
        ```
        module: {
                loaders:[
                    {
                        test: /\.js$/,
                        loader: 'babel-loader',
                        exclude: /node_modules/
                    }
                ]
            }
        ```
##自动产出html
   - npm install html-webpack-plugin --save-dev
##启动本地服务器
   - npm install webpack-dev-server --save-dev
## 打包react
   - npm install react react-dom --save-dev
   - npm install babel-preset-react --save-dev
   - 修改.babelrc文件,把"react"加入到presets里面
   ```
   {
     "presets":["es2015", "react"]
   }
   ```
##在webpack中加载css
   - npm install style-loader css-loader --save-dev
   - 修改webpack.config.js,在loaders加入：
    ```
     {
         test: /\.css$/,
         loader: 'style-loader!css-loader',
         include: path.resolve(__dirname, 'src')
     }
     ```
   
    ### webpack + less
     - npm install less less-loader --save-dev
     - 修改webpack.config.js,在loaders加入：
        ```
         {
             test: /\.less$/,
             loader: 'style-loader!css-loader!less-loader',
             include: path.resolve(__dirname, 'src')
         }
         ```
         
##测试用例
    - npm install karma karma-chrome-launcher mocha karma-mocha --save-dev
    - karma init   “创建karma.config.js文件”
    ### 单元测试 chai
       - npm install 
       
       
       

