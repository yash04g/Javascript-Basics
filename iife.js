
// function sayHello(){
//     console.log("Hello")
// }
// sayHello()

//IIFE => Immediately Invoked Function Expression
// This is a IIFE also called anonymous function
// (function (){
//     console.log("Hello")
// })();

(function (){
    var a = 10;
    var b = a/2;
    console.log(a+b)
})();
// console.log(a); =>It will give an error

// function doMath(){
//     console.log("3^4 = " + Math.pow(3,4));
//     console.log("4^3 = " + Math.pow(4,3));
//     console.log("root(2) = " + Math.sqrt(2));
//     console.log("sin(10) = " + Math.sin(10));
// }
// doMath()

(function (l,p,r,s){
    l("3^4 = " + p(3,4));
    l("4^3 = " + p(4,3));
    l("root(2) = " + r(2));
    l("sin(10) = " + s(10));
})(console.log,Math.pow,Math.sqrt,Math.sin);

// doMath and this function work in the same way. This kind of functions are made by ugly.js to make the size of js small

//IIFE in loops
for(var i=0;i<10;i++){
    (function(j){
        setTimeout(function(){
            console.log(j)
        },100)
    })(i);
    // setTimeout(function(){
    //     console.log(i)
    // },100)
}
// This problem can be solved using let instead of var

// for(let k =0;k<10;k++){
//     setTimeout(function(){
//         console.log(k)
//     },100)
// }

// for(var i=0;i<10;i++){
//     setTimeout(console.log,100,i)
// } => Even this works
