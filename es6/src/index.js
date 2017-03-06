/*
//es5 方式定义类
function Animal(name, age){
    this.name = name;
    this.age = age;
}

Animal.prototype = {
    getMessage: function(){
        console.log(this.name + " is " + this.age + ' years old');
    }
}


var cat = new Animal('cat', 1);

cat.getMessage();*/

// es6方式定义类
class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    getMessage(){
        console.log(this.name + " is " + this.age + ' years old');
    }

    static showInfo(){
        console.log('show info');
    }
}
//继承
class Cat extends Animal{
    constructor(name, age, color){
        super(name, age);
        this.color = color;
    }
    getName(){
        console.log(this.name + "'s color is "+this.color)
    }
}
var cat = new Cat('cat', 1, 'grey');
console.log(cat.__proto__)

cat.getName();

Animal.showInfo();
