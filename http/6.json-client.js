let http = require('http');

let options = {
    method: 'POST',
    hostname: 'localhost',
    port: 8080,
    path: '/',
    headers: {
        'Content-Type': 'application/json'
    }
};
let request = http.request(options, (response) => {
    response.setEncoding('utf-8');
    response.on('data', (data) => console.log(JSON.parse(data)));
    response.on('end', (data) => console.log(`服务已断开`));
});
request.write(JSON.stringify({name: 'sr', age: 22}));
request.end();