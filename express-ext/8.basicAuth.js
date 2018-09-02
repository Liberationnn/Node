let http = require('http');

http.createServer((req, res) => {
    let auth = req.headers['authorization'];
    if (auth) {
        console.log(req.headers);
    } else {
        res.setHeader('WWW-Authenticate', 'Basic realm="Secure Area"');
        res.writeHead(401);
        return res.end();
    }
    if (req.url !== '/favicon-ico') {
        res.end(req.url);
    } else {
        res.end('404');
    }
}).listen(8080);