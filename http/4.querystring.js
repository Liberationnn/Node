let querystring = require('http/4.querystring');

let obj = querystring.parse('name=sr&age=22');
console.log(obj);