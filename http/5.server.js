let http = require('http');

http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    console.log(`Content-Type: ${res.getHeader('Content-Type')}`);
    // res.removeHeader('Content-Type');
    console.log(`headersSent: ${res.headersSent}`);
    res.sendDate = false;
    res.statusCode = 400;
    res.write(`hello`);
    console.log(`headersSent: ${res.headersSent}`);
    res.end(`world`);
}).listen(8080, () => {
    console.log('server started');
});