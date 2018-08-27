let fs = require('fs');

let data = fs.readFileSync('read.txt', {encoding: 'utf-8', flag: 'r'});
console.log(data);

fs.readFile('read.txt', {encoding: 'utf-8', flag: 'r'}, (err, data) => {
    console.log(data);
});