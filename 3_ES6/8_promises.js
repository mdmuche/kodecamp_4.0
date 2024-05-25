//? creating promises
function checkEvenNumber(number) {
  return new Promise((resolve, reject) => {
    if (typeof number !== "number") {
      reject(new Error("must be a number"));
    } else if (number % 2 === 0) {
      resolve(`the number ${number} is even`);
    } else {
      reject(new Error(`odd number ecountered, number: ${number}`));
    }
  });
}

checkEvenNumber(10)
  .then((message) => {
    // console.log(message);
  })
  .catch((err) => {
    // console.log("error: ", err.message);
  });

//? Promise chaining
function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, name: "john doe" });
    }, 1000);
  });
}

function getPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { body: "i love mimicking people", userId: 1 },
        { body: "i like checking out characters", userId: 2 },
      ]);
    }, 1000);
  });
}

getUser(5)
  .then((user) => {
    // console.log("user:", user);
    return getPosts(user.id);
  })
  .then((posts) => {
    // console.log("user Post(s):", posts);
  })
  .catch((err) => {
    // console.log(err.message);
  });

//?todo   Error Propagation

//? Promise.all
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 1 resolved");
  }, 1000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 2 resolved");
  }, 1500);
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("promise 3 rejected"));
  }, 4000);
});

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    // console.log("all promises resolved", values);
  })
  .catch((err) => {
    // console.log("Error:", err.message);
  });

//? promise.race
Promise.race([promise1, promise2, promise3])
  .then((values) => {
    console.log("first promise to resolve:", values);
  })
  .catch((err) => {
    console.log("Error:", err.message);
  });
