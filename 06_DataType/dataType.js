/*
Primitive Type ==> call by valueInNumber

Non primitive type ==> call by reference

Array, Object, Function
*/

const score = 100;
const score1 = 100.0;
let userEmail = undefined;

const id = Symbol('1234')
const Anotherid = Symbol('1234')

console.log(id == Anotherid); //False
const bigNumber = 879878846566132;
console.log(bigNumber);
const anotehrBigNumber = 8798788465661326456654658n;
console.log(anotehrBigNumber);

const hero = ["Shakatiman", "Nagraj", "Doga"]
console.log(hero);
let myObj = {
    name: 'Prathamesh',
    age: 22
}
console.log(myObj);


const myFunction = function(){
    console.log('Hello World');
}

myFunction();

console.log(typeof myFunction);