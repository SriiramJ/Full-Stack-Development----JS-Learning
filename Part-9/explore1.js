function sayHello() {
  console.log("Hello");
}

setTimeout(() => {
  sayHello();
}, 5000);

console.log("I am a regular upper code");

for (let index = 0; index < 10; index++) {
  console.log(index);
}
