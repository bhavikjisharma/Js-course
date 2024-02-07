// Promise is made and stored in variable promise and that is resolved by calling resolve() in settimeout then it is connected to then using promise.then
// const promise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Async is completed");
//     resolve();
//   }, 1000);
// });

// promise.then(function () {
//   console.log("Promise is consumed");
// });

// We can do upper work by using this syntax also
// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Async 2 is completed");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("Promise of async-2 is consumed");
// });

// Network se koi data aya ho useh pass kese karwae
const promisethree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ userId: "123", email: "kalua342@example.com" });
  }, 1000);

  setTimeout(function () {
    resolve({ username: "bhavik", email: "bhavik232@example.com" });
  }, 1000);
});

promisethree.then(function (user, second) {
  console.log(user);
});

const promisefour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "Bhavik", userId: "1234" });
      console.log(error);
    } else {
      reject("ERROR : Something is wrong");
      console.log(error);
    }
  }, 1000);
});

promisefour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => {
    console.log("Promise is Either Resolved or rejected");
  });

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Rajesh", userId: "231" });
    } else {
      reject("Error : Something went wrong");
    }
  }, 1200)
});
