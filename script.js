// console.log('something')
// let mp = document.getElementById('mp')
// console.log(mp)
// console.log(1+2)
// // Creating objects
// let obj = {
//     alpha: 'ashfi',
//     beta: 'fjffx',
//     gamma:true,
//     zeta:{
//         one:1232,
//         two:'asd'
//     }
// }
// let keys = Object.keys(obj)
// for(let i = 0;i<keys.length;i++){
//     console.log(keys[i])
// }
// console.log("typeof null is ")
// console.log(typeof null)

// Webinar
// Semicolons are optional
let a = 10;
let result = " ";
//This prints line by line
for(let i = 0;i<a;i++){
    console.log(i);
}
// To print in the same line
for(let j = 0;j<a; j++){
    result = result + j + " ";
}
console.log(result);
var b = 30;
let c = 30;
c++
console.log(c)
const d = 40; // Changing the value of d is not possible
//Datatypes and variables
let num = 1;
let str = "this is a string"
let bool = true;
console.log(num)
console.log(typeof(num))
num = 'hello';
console.log(num)
console.log(typeof(num))
console.log(typeof(str))
console.log(typeof(bool))
console.log(Number.MAX_SAFE_INTEGER) //Use any value between these
console.log(Number.MIN_SAFE_INTEGER)
let obj = {
    a :10,
    b :'string',
    c :true,
    d :{
        p:1234,
        q:'lol',
        r: {
            x:'key'
        }
    }
}
console.log(obj.d.r.x)
obj.l = 1111;
console.log(obj)
// Making functions in Javascript
function add(a,b){
    return a+b
}
console.log(add(3,4))
console.log(1+'1'==1)
console.log('11'-1==1)
console.log([]==0)
console.log([] == "")
console.log({}+[]) // gives 0 see in browser console
console.log([] + {})
