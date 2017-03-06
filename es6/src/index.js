/*
//默认值default
function Person(name, age){
    if(typeof name == "undefined") name = name || 'Lily';
    if(typeof age == "undefined") age = age || '18';
    return name + '' + age;
}

Person('crystal');

//使用default定义
var Person = (name="Mary", age="16") =>{
    return name + '' + age;
}
console.log(Person('GuoYongfeng'))

*/

/*//keys: 任意参数 Rest
function argv(obj, ...keys){
    var res = Object.create(null);
    for(var i = 0; i < arguments.length; i++){
        res[arguments[i]] = obj[arguments[i]];
    }
    return res;
}
var data = {title: 'es6', name: 'Tom'};

var msg= argv(data, "title", "name", "age");

console.log(msg.age)

//spread
var arr = [18, 12, 334, 123, 5];
var newArr = [...arr, 100, 10000];

console.log(Math.max(...newArr));*/

//使用let新增块级作用域
/*
for(var i = 0; i < 10; i++){
}
console.log(i)//10

for(let i = 0; i < 10; i++){
}
// console.log(i)//报错，i is not defined
*/


// const是用于定义常量，但数值（仅允许被赋值一次）
// const a = 1;
// a = 2;//报错

// 没有变量提升，静态限制（Static restriction）组织变量在赋值钱被使用
/*console.log(a);//undefined 变量提升了
var a = 2;*/
console.log(a);//a is not defined
{
    let a = 2;
}
