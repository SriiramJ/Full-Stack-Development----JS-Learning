// Object Literal:
let car = {
  make: "Ford",
  model: "Mustang",
  year: 2022,
  start: function () {
    return `The ${this.make} ${this.model} is starting`;
  },
};

// console.log(car.start());

// Constructor Function:
function Person(name, age) {
  this.name = name;
  this.age = age;
}

let john = new Person("John Doe", 30);
//  console.log(john.name);

// Prototypal chain:
function Animal(type) {
  this.type = type;
}

Animal.prototype.sound = function () {
  return `The ${this.type} makes a sound`;
};

Array.prototype.sriram = function () {
  return `Custom method ${this}`;
};

let myArray = [1, 2, 3];
// console.log(myArray.sriram());

let myNewArray = [4, 5, 6];
// console.log(myNewArray.sriram());

// class - inheritance :
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  start() {
    return `The ${this.make} ${this.model} is starting`;
  }
}

class Car extends Vehicle {
  drive() {
    return `The ${this.make} ${this.model} is driving`;
  }
}

let myCar = new Car("Tata", "Nano");
// console.log(myCar.start());
// console.log(myCar.drive());

// Encapsulation:

class BankAccount {
  #Balance = 0;

  deposit(amount) {
    return (this.#Balance += amount);
  }

  getBalance() {
    return `My balance is $ ${this.#Balance}`;
  }
}

let myAccount = new BankAccount();
// console.log(myAccount.getBalance());

// Abstraction:

class CoffeMachine {
  start() {
    return `The coffe machine is starting`;
  }
  brew() {
    return `and the coffe machine is brewing`;
  }
  pressStart() {
    let start = this.start();
    let brew = this.brew();
    return `${start} ${brew}`;
  }
}
let myMachine = new CoffeMachine();
// console.log(myMachine.pressStart());

// Polymorphism:
class Birds {
  fly() {
    return `Birds can fly`;
  }
}

class Penguin extends Birds {
  fly() {
    return `Penguins can't fly`;
  }
}

let myBird = new Birds();
let myPenguin = new Penguin();
// console.log(myPenguin.fly());
// console.log(myBird.fly());

// Static Method:
class Calculator {
  static add(x, y) {
    return x + y;
  }
}

// console.log(Calculator.add(2, 3));

// Getter and Setter:
class Employee {
  #salary;
  constructor(name, salary) {
    if (salary < 0) {
      throw new Error("Salary cannot be negative");
    } else {
      this.#salary = value;
    }
    this.name = name;
    this.#salary = salary;
  }
  get salary() {
    return `You are not allowed to read salary`;
  }
  set salary(value) {
    return (this.#salary = value);
  }
}
let emp = new Employee("Sriram", -10000);
console.log(Employee.salary);
