var others = {data: 'other data' };

var obj = {
    __proto__: others,
    name: 'crystal',
    getName(){
        console.log(this.name)
    }
}

var a = 1;
var b = "eee";
var fn = (m, n) => console.log(m+n);
var objOther = {a, b, fn};
console.log(objOther.fn(1,2))