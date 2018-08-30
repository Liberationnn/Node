let http = require('http'),
    querystring = require('querystring'),
    util = require('util'),
    url = require('url'),
    fs = require('fs');

http.createServer((req, res) => {

    let urlObj = url.parse(req.url, true),
        pathname = urlObj.pathname,
        result = '';
    if (pathname === '/') {
        fs.createReadStream('index2.html').pipe(res);
    } else if (pathname === '/post') {
        let contentType = req.headers['content-type'];
        req.setEncoding('utf-8');
        req.on('data', (data) => {
            switch (contentType) {
                case 'application/x-www-form-urlencoded':
                    result = querystring.parse(data);
                    break;
                case 'application/json':
                    result = JSON.parse(data);
                    break;
            }
        });
        req.on('end', (data) => {
            console.log(result);
            res.end(util.inspect(result));
        });
    }
}).listen(8080, () => {
    console.log(`服务已启动`);
});