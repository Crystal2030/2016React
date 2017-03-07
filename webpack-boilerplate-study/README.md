# 项目开发指导

## 基本环境

## 依赖技术点
- webpack
- babel 语法解析
- es6/7 基本语法
- eslint 语法检查
- npm scripts 统一的任务构建
- react 组件化基础类库 

##webpack + babel

    ```
       npm install babel-loader babel-core babel-preset-es2015 --save-dev
    
    ```
    - webpack配置
    ```
    module: {
            loaders:[
                {
                    test: /\.js$/,
                    loader: 'babel',
                    exclude: /node_modules/
                }
            ]
        }
    ```

## 如何开发

```
1. npm install

2. npm run build
```


