/* Task 1: Encapsulation Using Getters and Setters

Create a class BankAccount with a private property _balance. Add methods deposit(amount) and withdraw(amount). Use getters and setters to access and modify the _balance while ensuring the balance never goes negative. */

class BankAccount {
  constructor(balance = 0) {
    if (balance < 0) {
      throw new Error("Balance cannot be nagative");
    } else {
      this._balance = balance;
    }
  }

  get balance() {
    return this._balance;
  }

  set balance(amount) {
    if (amount < 0) {
      throw new Error("Balance cannot be negative");
    }else{
        this._balance = amount;
    }
  }

  deposit(amount) {
    if (amount < 0) {
      throw new Error("Deposit amount cannot be negative");
    } else {
      this.balance += amount;
    }
  }

  withdraw(amount) {
    if (amount < 0) {
      throw new Error("Withdraw amount cannot be negative");
    } else if (this._balance - amount < 0) {
      throw new Error("Insufficient funds");
    } else {
     this._balance -= amount
    }
  }
}



/* Task 2: Polymorphism with Method Overriding

Create a class Shape with a method area() that returns 0. Create two subclasses Circle and Rectangle that override the area() method to calculate the area of a circle and a rectangle, respectively. */

class Shape {

  area() {
    return 0;
  }
}

class Circle extends Shape{
  constructor(radius){
    super();
    this.radius = radius;
  }
  area(){
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle extends Shape{
  constructor(width, height){
    super();
    this.width = width;
    this.height = height;
  }
  area(){
    return this.width * this.height;
  }
}

