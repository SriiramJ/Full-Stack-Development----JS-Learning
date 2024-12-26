let computer = { brand: "Apple" };
let cpu = {
  thread: 8,
  __proto__: computer,
};
let hardware = {
  __proto__: cpu,
};

// console.log(`cpu`, hardware.__proto__);

let genericCar = { tyre: 4 };

let tesla = {
  driver: "Sriram",
};
Object.setPrototypeOf(tesla, genericCar);
// console.log(`tesla`, Object.getPrototypeOf(tesla));
// console.log(Object.hasOwnProperty(tesla, "tyre"));
