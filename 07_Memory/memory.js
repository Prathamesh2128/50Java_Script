/**
 * Stack Memory ==> Primitive type ==> Get Copy
 * Heap Memory ==> Non Primitive type ==> Get reference
 */

let myName = 'Prathamesh'
let anotherName = myName;
anotherName = 'shinde'

let user = {
    email: 'pathushinde@gmail.com',
    upi: 'icici@ok'
}

let anotherUser = user;
console.log(user.email);

anotherUser.email = 'shidne@gmail.com'

console.log(anotherUser.email);
console.log(user.email);
