// Task 1 :Create an object person with properties name and a method introduce(). Use the bind() method to ensure the method works correctly when passed to another function.
const person = {
  name: "Alice",
  introduce: function () {
    return `Hi, my name is ${this.name}`;
  },
};
const boundIntroduce = person.introduce.bind(person);

// Task 2 :Write a function introduce() that uses the this keyword to introduce a person by name. Then, invoke introduce() using call() to introduce different people with the same function.
function introduce() {
  return `Hi, my name is ${this.name}`;
}
const person1 = { name: "Alice" };
const person2 = { name: "Bob" };

introduce.call(person1);
introduce.call(person2);

// Task 3: Create a function sum() that accepts two numbers and uses this to access a multiplier value. Then, invoke sum() with different contexts using apply(), passing the numbers as an array.
function sum(a, b) {
  return (a + b) * this.multiplier;
}
const context1 = { multiplier: 2 };
const context2 = { multiplier: 3 };

sum.apply(context1, [5, 10]);
sum.apply(context2, [5, 10]);
