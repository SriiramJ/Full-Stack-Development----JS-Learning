function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "Sriram", age: 20 });
    }, 3000);
  });
}

async function getUserData() {
  try {
    console.log("Fetching user data...");
    const userData = await fetchUserData();
    console.log("User data fetched!");
    console.log("User data: ", userData);
  } catch (error) {
    console.log("Error fetching user data:", error);
  }
}

getUserData();
