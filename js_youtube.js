//Strings
let str = 'This is Yash\'s string'
let y = 'yash'
let abc = `This is ${y}\'s string`
console.log(abc)
let longstr = 'this is \
a very long \n\
string'
console.log(longstr)
console.log(str.length)
// Searching
let s = 'this-is-a-easy job' //In case of string even space in between words takes up space 
let key = 'is'
console.log(s.indexOf(key))
console.log(s.indexOf('is',3)) // The second number(3) gives the starting point of string 
console.log(s.indexOf('have'))
let smallstr = s.slice(2,3)
console.log(smallstr)
smallstr = s.substring(1,10)
console.log(smallstr)
// There's a small difference between substring and slice, in slice you can give -ve numbers so that slicing happens in reverse
smallstr = s.slice(-9,-3)
console.log(smallstr)
// In case of substr the second arguement represents the length and first element the starting point
smallstr = s.substr(3,4)
console.log(smallstr)
