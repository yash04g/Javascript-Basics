var a = 10
a++
console.log(a)
++a
console.log(a)

let b = 20;
b++
console.log(b)

const c = 30;
// c++ => gives an error

const obj = {
    k1:'asd',
    k2:123
}
obj.k3 = 112233
console.log(obj)
delete obj.k1
console.log(obj.k1)

var myVar = 10
function alpha(){
    var myVar = 11
    if(true){
        var myVar = 21
        console.log(myVar)
    }
    console.log(myVar)
}
alpha()
// The difference between var and let

function alpha1(){
    let myVar1 = 11
    if(true){
        let myVar1 = 21
        console.log(myVar1)
    }
    console.log(myVar1)
}
alpha1()

function alpha2(){
    const myVar2 = 11
    if(true){
        const myVar2 = 21
        console.log(myVar2)
    }
    console.log(myVar2)
}
alpha2()