function Car(make, model) {
  this.make = make;
  this.model = model;
}

let MyCar = new Car("Ford", "Mustang");
// console.log(MyCar);

let MyNewCar = new Car("Honda", "Civic");
// console.log(MyNewCar);

function Tea(type) {
  this.type = type;
  this.describe = () => {
    return `This is a cup of ${this.type}`;
  };
}
let myTea = new Tea("Green Tea");
// console.log(myTea.describe());

let yourTea = new Tea("Black Tea");
// console.log(yourTea.describe());

function Animal(species) {
  this.species = species;
}

Animal.prototype.sound = function()  {
  return `The ${this.species} makes a sound`;
};

let dog = new Animal("Dog");
console.log(dog.sound());

let Cat = new Animal("Cat");
console.log(Cat.sound());

// Error Handling

function Drink(name) {
    if (!new.target) {
        throw new Error("Drink must be called with new keyword");
    }
    this.name = name;
}

let tea = new Drink("Green tea");
let coffee =  Drink("Coffee");