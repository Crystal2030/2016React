## 如何开发一个属于自己的前端类库
- 基于webpack进行资源构建
- 使用ES6语法进行开发
- 将包输出为umd规范的文件
- 使用mocha和chai进行测试
- 使用eslint来进行代码检查
- 基于npm scripts来集成开发命令

## 基于开发环境
- 全局环境 node&npm
- 命令行 terminal & shell
- 版本管理 git
- 编辑器 atom/webstrom/st3/vs
- 浏览器 chrome

## 创建项目的基本结构
```
src 开发源代码
lib 编译后的资源
test 测试用例
.gitignore 
LICENCE 
README.md
package.json
webpack.config.js
.babelrc
.eslint.js

```

## 结合webpack 跑通es6语法编译过程
- webpack.config.js
```
npm install webpack webpack-dev-server --save-dev
```

- babel及相关preset、plugin、loader
```
npm install babel-loader babel-core babel-preset-es2015 babel-plugin-add-module-exports --save-dev
```

## webpack几个小配置
- resolve
    - extensions 扩展名， 方便
    - root 添加默认搜索路径，但得是绝对路径，可以使数组和字符串  //webpack2里面好像去掉了
    ```
        webpack2里面resolve 去掉了root， 把extension改为extensions了
     ```
- devtool 开发工具配置
    - cheap-source-map
     
    
## 区分开发环境和生产环境    
- sparrow.js (开发环境，未压缩校验，一些开发环境的配置和代码)
- sparrow.min.js（生产环境)
    
    ```
    webpack2里面配置开发环境把--mode=development改为--env=development了 
    ```
## 将用于生产环境的代码压缩
   ```
   webpack.optimize.UglifyJsPlugin
   ```
## eslint eslint-loader   
- npm install eslint esling-loader --save-dev

## 代码push到github上
- package.json
- README.md 完善
## 将包发布到npm上去：(只能发布不同名的包)
- registry
- .npmignore 忽略提交 
- npm adduser
  Username: crystal2030
  Password: *******
  Email: 123@qq.com
- npm publish  
  

