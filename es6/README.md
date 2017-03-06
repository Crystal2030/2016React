#基本项目目录结构的说明
```
src es6源代码
dist： es6-》es5目录下的代码，测试
package.json

```

#如何开发
```
npm run dev

```

#搭建学习环境
- babel
    - babel-core@5 用于浏览器端直接引入
    - babel-cli 命令行工具
    - babel-preset-es2015 & babel-preset-es2015-loose  分别是normal和loose两种模式解析es5语法
    - 
- 解析es5语法
  - babel-preset-stage-0 或者 stage-1等
  - babel-preset-es2016
  - babel-register 用于es6的文件里面直接引入，这样可以运行时解析
  - babel-polyfill 用于将一些es5的API做兼容处理
  
#箭头函数
```
1. 
var fn = p => p;
相当于
var fn = function(p){
    return p;
}
```
```
var fn = p => p;

var fn1 = () => "无参数输入的箭头函数";

var fn2 = (a,b) => a + b;

var fn3 = ({a,b}) => a + b;

console.log(fn3({a:1,b:3}));//4

var fn4 = (a, b) => {
    var m = a + 2;

    //显式return
    return m*b;
}

console.log(fn4(1, 2));//6

```
