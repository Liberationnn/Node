console.log(1);
console.log(2);

setTimeout(() => {
    console.log('setTimeout 3');
});

process.nextTick(() => {
    console.log('nextTick 3');
});

console.log(4);