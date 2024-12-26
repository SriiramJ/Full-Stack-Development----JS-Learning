const person = {
    name: "Sriram",
    greet: function () {
        console.log(`Hello, my name is ${this.name}`);
}
}
person.greet()

const greetPerson = person.greet
greetPerson()

const boundPerson = person.greet.bind({name : "Hitesh"})
boundPerson();