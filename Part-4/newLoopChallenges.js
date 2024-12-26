//  1. For Loop - Break
let teas = ["green tea", "black tea", "Chai", "oolong tea"];
let selectedTeas = [];
for (let i = 0; i < teas.length; i++) {
  if (teas[i] === "Chai") {
    break;
  }
  selectedTeas.push(teas[i]);
}
// console.log(selectedTeas);

// 2. For Loop - Continue
let cities = ["London", "Tokyo", "Paris", "New York"];
let visitedCities = [];
for (let i = 0; i < cities.length; i++) {
  if (cities[i] === "Paris") {
    continue;
  }
  visitedCities.push(cities[i]);
}
// console.log(visitedCities);

// 3. For of Loop - Break
let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];
for (const num of numbers) {
  if (num === 4) {
    break;
  }
  smallNumbers.push(num);
}
// console.log(smallNumbers);

// 5. For of Loop - Continue
let teaTypes = ["green tea", "herbal tea", "black tea"];
let preferredTeas = [];
for (const tea of teaTypes) {
  if (tea === "herbal tea") {
    continue;
  }
  preferredTeas.push(tea);
}
// console.log(preferredTeas)

// 5. For in Loop - objects(break)

let cityPopulation = {
  London: 1000000,
  Tokyo: 2000000,
  Berlin: 4000000,
  Paris: 3000000,
};
let cityNewPopulation = {};
for (const city in cityPopulation) {
  if (city === "Berlin") {
    break;
  }
  cityNewPopulation[city] = cityPopulation[city];
}
// console.log(cityNewPopulation);

// 6. For in Loop - objects(continue)
let worldCities = {
  London: 10000000,
  Tokyo: 2000000,
  Berlin: 4000000,
  Paris: 30000000,
};
let largeCities = {};
for (const city in worldCities) {
  if (worldCities[city] < 3000000) {
    continue;
  }
  largeCities[city] = worldCities[city];
}
// console.log(largeCities);

// 7. For each Loop - arrays(function)
let teaCollections = ["green tea", "black tea", "Chai", "oolong tea"];
let availableTeas = [];
teaCollections.forEach(function (tea) {
  if (tea === "Chai") {
    return;
  }
  availableTeas.push(tea);
});
// console.log(availableTeas);

// 8. For each Loop - arrays( function)
let myWorldCities = ["Berlin", "Tokyo", "Sydney", "London"];
let traveledCities = [];
myWorldCities.forEach(function (city) {
  if (city === "Sydney") {
    return;
  }
  traveledCities.push(city);
});
// console.log(traveledCities);
// 9. for loop - test
let values = [2, 5, 7, 9];
let doubleValues = [];
for (let j = 0; j < values.length; j++) {
  if (values[j] === 7) {
    continue;
  }
  doubleValues.push(values[j] * 2);
}
// console.log(doubleValues);

// 10. for of loop
let teaCollection = ["green tea", "black tea", "Chai", "oolong tea"];
let shortTeas = [];
for (const tea of teaCollection) {
  if (tea.length > 10) {
    break;
  }
  shortTeas.push(tea);
}
//  console.log(shortTeas)

