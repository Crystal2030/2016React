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

var obj = {
    name: 'crystal',
    courses: ["react", "vue.js", "node.js"],
    //es5
    getMessage: function () {
        this.courses.forEach(function(item){
            console.log(this.name + " tech us " + item);
        }.bind(this))
    },
    //es6
    getMessage2: function(){
        this.courses.forEach((item) => {
            console.log(this.name + " tech us " + item);
        })
    }
}

obj.getMessage2();