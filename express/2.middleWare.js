let url = require('url');

module.exports = function (app) {
    app.use(function (req, res, next) {
        let urlObj = url.parse(req.url, true),
            {pathname, query} = urlObj;
        req.path = pathname;
        req.query = query;
        next();
    });

    app.use(function (req, res, next) {
        res.send = function (html) {
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            res.end(html);
        };
        next();
    });
};