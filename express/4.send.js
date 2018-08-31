/**
 * 接收客户端的参数数据
 * 1.query查询字符串
 * 2.路径参数
 * 3.请求体 request.body
 * 4.请求头 request.headers
 */
let express = require('express');
let app = express();

app.get('/query', (req, res) => {
    res.send(req.query);
});

app.get('/article/:id/:name', (req, res) => {
    res.send(req.params);
});

app.all('/host', (req, res) => {
    console.log(req.path, req.hostname);
    res.send('host: ' + req.url);
});

app.all('/status', (req, res) => {
    // res.send('host: ' + req.url);
    res.sendStatus(200);
});

app.all('*', (req, res) => {
    res.send('页面不存在');
});

app.listen(8080);