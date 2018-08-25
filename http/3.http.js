let http = require('http');
let fs = require('fs');
let url = require('url');
let MimeLookup = require('mime-lookup'),
    mime = new MimeLookup(require('mime-db'));


let server = http.createServer((req, res) => {
    let {pathname, query} = url.parse(req.url, true);
    pathname = pathname === '/' ? 'index.html' : pathname.slice(1);

    res.setHeader('Content-Type', mime.lookup(pathname) + '; charset=utf-8');

    fs.readFile(pathname, (err, data) => {
        res.write(data);
        res.end();
    });
});

server.listen(8080, 'localhost');