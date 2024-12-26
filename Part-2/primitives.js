// Numbers

let balance = 120;
let anotherBalance = new Number(120);

// console.log(balance);
// console.log(anotherBalance);

// console.log(typeof balance);
// console.log(typeof anotherBalance);

// boolean

let isActive = true
let isHidden = new Boolean(true) //not recommended
// console.log(isHidden);

// Null and undefined

let firstName = undefined
let lastName = null
// console.log((lastName));
// console.log(firstName);

// String

let myString = 'Hello'
let myStringone = 'Hola'
let username = "Sriram" 

let oldGreet = myString + " " + "Sriram !"
// console.log(oldGreet);

let greetMessage = `Hello ${username} !`
// console.log(greetMessage);

// Symbols

let sm1 = Symbol('sriram')
let sm2 = Symbol('sriram')
 console.log(sm1 == sm2);
