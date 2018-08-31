let http = require('http'),
    url = require('url'),
    querystring = require('querystring');

let articles = {
    "1": "第一篇文章的详情",
    "2": "第二篇文章的详情",
    "3": "第三篇文章的详情"
};

http.createServer((req, res) => {
    let send = (html) => {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.end(html);
    };

    let urlObj = url.parse(req.url, true),
        {pathname, query} = urlObj;

    if (pathname === '/') {
        send(`<li><a href="/article?id=1">第一篇</a></li><li><a href="/article?id=2">第二篇</a></li><li><a href="/article?id=3">第三篇</a></li>`);
    } else if (pathname === '/article') {
        send(articles[query.id]);
    } else {
        res.end('404');
    }
}).listen(8080);