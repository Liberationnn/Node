function helloWorld(ready) {
  return new Promise((resolve, reject) => {
    if (ready) {
      resolve('Hello World!');
    } else {
      reject('Good Bye!');
    }
  });
}

helloWorld(false).then(
  (message) => console.log(message),
  (err) => console.log(err)
);
console.log('Hi!');