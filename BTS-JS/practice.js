function fetchData() {
  return new Promise((resolve, reject) => {
    let success = true;
    if (success) {
      resolve("Data fetched successfully");
    } else {
      reject("Data fetching failed");
    }
  });
}

fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

function fetch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let time = true;
      if (time) {
        console.log("Success");
      } else {
        console.log("Failed");
      }
    }, 3000);
  });
}


fetch().then((value)=>{console.log("value");
})