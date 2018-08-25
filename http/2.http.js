let http = require('http');
let fs = require('fs');
let MimeLookup = require('mime-lookup'),
    mime = new MimeLookup(require('mime-db'));

// 每当有请求来的时候调用fn函数对客户端进行响应
let server = http.createServer((req, res) => {
    let url = req.url === '/' ? 'index.html' : req.url.slice(1);

    res.setHeader('Content-Type', mime.lookup(url) + '; charset=utf-8');

    fs.readFile(url, (err, data) => {
        res.write(data);
        res.end();
    });
});

server.listen(8080, 'localhost');