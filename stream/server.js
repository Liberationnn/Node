let http = require('http');
http.createServer((req, res) => {
    res.end('123');
    console.log(req.headers);
    req.setEncoding('utf-8');
    req.on('data', (data) => console.log(data));
}).listen(8080);