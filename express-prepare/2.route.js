let fs = require('fs');

let articles = {
    "1": "第一篇文章的详情",
    "2": "第二篇文章的详情",
    "3": "第三篇文章的详情"
};

module.exports = function (app) {
    app.use('/list', function (req, res) {
        fs.createReadStream('./Article.html').pipe(res);
    });
    app.use('/article', function (req, res) {
        fs.createReadStream('./Detail.html').pipe(res);
    });
    app.use(function (req, res) {
        res.end('404');
    });
};
