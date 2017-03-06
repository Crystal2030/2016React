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