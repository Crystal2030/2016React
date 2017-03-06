
var [dog, , bull, [ken, duck]] = ["狗", "猫", "牛", ["鸡","鸭"]];

console.log( dog )
console.log( bull )
console.log( ken )
console.log( duck )

//对象解构赋值
var obj = {
    a: "1",
    b: ["狗", ["鸡","鸭"]],
    fn: function(){console.log(this.a)}
};
var {a, b} = obj;

console.log(b);

var {React, Component, Prototyep} = require('react');

