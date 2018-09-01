let express = require('express'),
    proxy = require('http-proxy').createProxyServer();
let app = express();

app.get('/', (req, res) => {
    let hostname = req.headers.host;
    switch (hostname) {
        case 'a.srrrrr.cn':
            proxy.web(req, res, {target: 'localhost:3000'});
            break;
        case 'b.srrrrr.cn':
            proxy.web(req, res, {target: 'localhost:4000'});
            break;
    }
    res.send(req.headers);
});

app.listen(8080);
