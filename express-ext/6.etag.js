let fs = require('fs'),
    http = require('http'),
    crypto = require('crypto');

function getHash(str) {
    let shasum = crypto.createHash('sha1');
    return shasum.update(str).digest('hex');
}

function send(fileName, req, res) {
    let ifNoneMatch = req.headers['if-none-match']; //取得最后修改时间
    let data = fs.readFileSync(fileName);
    if (ifNoneMatch === getHash(data)) {
        res.statusCode = 304;
        res.end();
    } else {
        res.writeHead(200, {'Etag': getHash(data)});
        fs.createReadStream(fileName).pipe(res);
    }
}

http.createServer((req, res) => {
    if (req.url !== '/favicon.ico') {
        let fileName = req.url.slice(1);
        send(fileName, req, res);
    } else {
        res.end('404');
    }
}).listen(8080);