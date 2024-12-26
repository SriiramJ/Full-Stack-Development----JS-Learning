//Create an object person with a method introduce() that uses this additionally add properties of name & age that will result in Hi, my name is Hitesh and I am 19.5 years old on calling introduce()
const person = {
  name: "Hitesh",
  age: 19.5,
  introduce: function () {
    return `Hi, my name is ${this.name} and I am ${this.age} years old`;
  },
};
let intro = person.introduce();

//Write a function outer() that contains another function inner() and returns a value of 'Inner function called' on calling outer()
function outer() {
  function inner() {
    return "Inner function called";
  }
  return inner();
}

 