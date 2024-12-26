// 1. Accessing the first element in the array
let teaFlavors = ["green tea", "black tea", "oolong tea"];
const firstTea = teaFlavors[0];

// 2. Accessing the third element in the array

let cities = ["London", "Tokyo", "Paris", "New York"];
const favoriteCity = cities[2];

// 3. Changing the element in the array

let teaTypes = ["herbal Tea", "white tea", "masala tea"];
teaTypes[0] = "jasmine tea";

// 4. Push method
let citiesVisited = ["mumbai", "Sydney"];
citiesVisited.push("Berlin");

// 5. pop Method
let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
const lastOrder = teaOrders.pop();

//  6. copy of the array
let popularTeas = ["green tea", "oolong tea", "chai"];
let softCopyTeas = popularTeas;

// 7. Hard copy of an array
let topCities = ["Berlin", "Singapore", "New York"];
let hardCopyCities = [...topCities];

// 8. Merge Array
let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];
let worldCities = europeanCities.concat(asianCities);

//  9. Length of the array
let teaMenu = ["masala tea", "ooloong tea", "green tea", "earl grey"];
const menuLength = teaMenu.length

// 10. Check the array : Boolean
let cityBucketList = ["Kyoto", "London", "Cape Town","Vancouver"]
let isLondonInList = cityBucketList.includes("London")