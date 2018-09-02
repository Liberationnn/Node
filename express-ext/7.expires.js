let fs = require('fs'),
    http = require('http');

function send(fileName, req, res) {
    fs.readFile(fileName, (err, data) => {
        let expires = new Date(Date.now() + 10 * 1000);
        res.setHeader('Expires', expires.toUTCString()); //设置过期时间(绝对时间)
        res.setHeader('Cache-Control', 'max-age=10'); //设置过期时间(相对时间)
        res.end(data);
    });
}

http.createServer((req, res) => {
    if (req.url !== '/favicon.ico') {
        console.log(req.url);
        let fileName = req.url.slice(1);
        send(fileName, req, res);
    } else {
        res.end('404');
    }
}).listen(8080);