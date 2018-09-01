let express = require('express'),
    fs = require('fs'),
    http = require('http');

function send(fileName, req, res) {
    // 转换时间戳
    function trans(time) {
        return time.toString().slice(0, 10);
    }

    let lastModified = new Date(req.headers['if-modified-since']); //取得最后修改时间
    fs.stat(fileName, (err, stats) => {
        if (trans(stats.mtime.getTime()) === trans(lastModified.getTime())) {
            res.statusCode = 304;
            res.end();
        } else {
            res.writeHead(200, {'Last-Modified': stats.mtime.toUTCString()});
            fs.createReadStream(fileName).pipe(res);
        }
    });
}

http.createServer((req, res) => {
    if (req.url !== '/favicon.ico') {
        let fileName = req.url.slice(1);
        send(fileName, req, res);
    } else {
        res.end('404');
    }
}).listen(8080);