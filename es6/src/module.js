/*export var a = 1;
export let obj = {
    m: "2"
}
export function hello(a , b){
    console.log(a+b);
}*/

/*
export default{
    a: "3333"
}
*/
//没有名字的module必须要加上default
var obj = {
    a: 1,
    fn: function(){
        console.log('000');
    }
};

export default obj;
/*export default{
    a: 1,
    fn: function(){
        console.log('000');
    }
}*/


