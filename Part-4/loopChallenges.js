// 1. While Loop - sum
let sum = 0;
let i = 1;
while (i <= 5) {
  sum = sum + i;
  i++;
}

// 2. While Loop - Arrays
let countdown = [];
i = 5;
while (i > 0) {
  countdown.push(i);
  i--;
}

//3. Do While Loop
/*let teaCollections = [];
let tea;
do {
  tea = prompt(`Type "Stop" to end the array`);
  if (tea !== "Stop") {
    teaCollections.push(tea);
  }
} while (tea !== "Stop"); */   

// 4. Addition in do while
let total = 0;
let j = 1;
do {
  total += j;
  j++;
} while (j <= 3);
console.log(total);


// 5. For Loop
let multipliedNumbers = [];
let numbers = [2, 4, 6];
for (let l = 0; l < numbers.length; l++) {
  takeNumbers = numbers[l] * 2;
  multipliedNumbers.push(takeNumbers);
}

// 6. For Loop
cities = ["Paris", "New York", "Tokyo", "London"];
cityList = [];
for (let c = 0; c < cities.length; c++) {
  const Mycity = cities[c];
  cityList.push(Mycity);
}
console.log(cityList);

