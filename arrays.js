let arr = [1,2,3]
console.log(arr[0])
console.log(arr.length)

let arr2 = [1,'hello',false,[2,3],arr]
console.log(arr2[3])
// 3 types of for loops
for(let i=0;i<arr2.length;i++){
    console.log(arr2[i])
}
for(let val of arr2){
    console.log(val)
}
for(let index in arr2){
    console.log(arr2[index])
}
// Add/Remove items from array
let fruits = ['apple','mango']
//Push and pop
fruits.push('watermelon')// The new element is added at last
console.log(fruits)
fruits.push('kiwi','melon')
console.log(fruits)
fruits.pop() // The last element is popped from the array
console.log(fruits)
// Shift and Unshift
fruits.shift() //First element gets shifted out (or deleted)
console.log(fruits)
fruits.unshift('kiwi','grapes') // Added on first element
console.log(fruits)
// Data Changing
let notes = ['do','re','mi','fa','so','la','ti','do']
// slice => non destructive in nature=> it means the actual array doesn't change
console.log(notes.slice(4,6))
// splice => Destructive in nature 
let omit = notes.splice(4)
console.log(omit)
console.log(notes)
let omit1 = notes.splice(1,3) // 3 denotes the number of elements that need to be spliced
console.log(omit1)
console.log(notes)
// splice can replace data as well
notes = ['do','re','mi','fa','so','la','ti','do']
notes.splice(0,3,'sa','re')
console.log(notes)
// Concatination => doesn't change the original array, even an array can be sent to concat
notes = ['do','re','mi']
console.log(notes.concat('sa',['re','ga']))
console.log(notes)
