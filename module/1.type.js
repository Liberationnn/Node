let p = require('./Person');
let json = require('./json.json');

// require json的实现
// let fs = require('fs');
// let result = fs.readFileSync('json.json', 'utf-8');
// let json = JSON.parse(result);

console.log(p);
console.log(json);
console.log(p.getType());