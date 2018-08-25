let http = require('http');

// 每当有请求来的时候调用fn函数对客户端进行响应
let server = http.createServer((req, res) => {
    console.log(req.method); //获取请求方法
    console.log(req.url); //获取请求地址
    console.log(req.header); //获取请求头

    res.statusCode = 200; //设置状态码
    res.setHeader('Content-Type', 'text/html; charset=utf-8'); //设置响应类型，编码为utf-8
    res.setHeader('name', 'sr'); //设置响应头
    res.write(new Date().toString()); //设置响应主体
    res.end(); //关闭连接
});

server.listen(8080, 'localhost');