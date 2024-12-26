function postData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data posted successfully!");
    },2000);
  });
}

function commentData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Comment posted successfully!");
    }, 3000);
  });
}

async function blogData() {
    try {
        console.log("Posting blog data...");
        // const post = await postData();
        // const comment = await commentData();
       const [post, comment] = await Promise.all([postData(), commentData()]);
        console.log(post);
        console.log(comment);
        console.log("Blog data posted successfully!");
        
        
    } catch (error) {
        console.log("Error posting bllog data:", error)
    }
}

 blogData(); 