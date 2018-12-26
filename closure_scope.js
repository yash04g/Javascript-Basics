function count(){
    var initial = 1;
    function plus(){
        console.log(++initial)
    }
    // plus()
    return plus
}
var c = count()
c(); //gives 2
c();// This modifies the value of c now to 3

function counter(initial){
    var val = initial
    function plus(){
        console.log(++val)
    }
    // plus()
    return plus;
}
var c = counter(10)
c(); //gives 11
c();// This modifies the value of c now to 12

function counter(val){
    function plus(){
        console.log(++val)
    }
    // plus()
    return plus;
}
var c = counter(10)
c(); //gives 11
c(); //gives 12

//Now we can write something like this
function createCounter(initVal,deltaVal){
    return{
        up(){
            initVal += deltaVal;
            console.log(initVal);
        },
        down(){
            initVal -= deltaVal;
            console.log(initVal);
        }
    }
}
var c= createCounter(10,2)
c.up()
c.up()
c.down()
