let fs = require('fs');

// 同步方式读取
let data = fs.readFileSync('read.txt', {encoding: 'utf-8', flag: 'r'});
console.log(data);

// 异步方式读取
fs.readFile('read.txt', 'utf-8', (err, data) => {
    console.log(data);
});