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
  ##增强的对象字面量
  - 扩展后的对象字面量，允许在结构中设置原型，简化了类似‘foo:foo'这样的赋值、定义方法和父级调用
  - 这使对象字面量跟接近“类的声明”，并使得基于对象的设计更加方便
  
#模板字符串 template strings
- 模板字符串提供了构建字符串的语法糖， 类似于像Perl， Python等语言总的字符串插值
- 也可以构建一个自定义标签，避免注入攻击或字符串内容构建更高层次的数据结构

#结构Destructuring
- 解构允许“数组和对象”使用“模式匹配”进行绑定
- 解构是以foo['foo']方式查找变量，当没有返回undefined
