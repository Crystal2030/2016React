var name = "cat";
var age = "1";

var str = name + " is " + age + " years old.";

var temStr = `${name} is ${age} years old`;
// console.log(str);
// console.log(temStr);


var htmlStr = "<div>" + name +"</div>" +
    "<h1>" + age +"</h1>" + "years old.";
var htmlTemStr = `<div>${name} </div><h1>${age}</h1> years old.`;

console.log(htmlStr)
console.log(htmlTemStr)