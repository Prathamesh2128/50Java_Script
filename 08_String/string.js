const myName = "Prathamesh"
const repo = 50;

console.log(`Hello my name is ${myName} and my repo count is ${repo}`);

const gameName = new String ('Prathamesh Shinde');
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));

console.log(gameName.indexOf('t'));

const anotherGame = gameName.substring(0, 4);
console.log(anotherGame);

const newGame = gameName.slice(-8, 3);
console.log(newGame);

const newStirngOne = "    ABCD     ";
console.log(newStirngOne);
const trimField = newStirngOne.trim();
console.log(trimField);


const ulr = "https://prathamesh.com/prathamesh%20shinde"

console.log(ulr.replace('%20', '-'));

console.log(gameName.split(" "));