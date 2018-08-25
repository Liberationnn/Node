let fs = require('fs');

// 优先级：nextTick > setTimeout > setImmediate > 异步I/O

fs.readFile('1.txt', (err, data) => {
    console.log(data.toString());
});

setTimeout(() => {
    console.log(1);
});

process.nextTick(() => {
    console.log(2);
    process.nextTick(() => {
        console.log(3);
    });
});

setImmediate(() => {
    console.log(4);
    setImmediate(() => {
        console.log(5);
    });
});