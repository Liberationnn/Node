/**
 * 多语言网站
 */
let express = require('express'),
    path = require('path');
let app = express();

// Accept-Language: en,zh-CN;1=0.9,zh;q=0.8
function checkLanguage(languages) {
    function parse(str) {
        if (!str) return;
        return str.toLowerCase().split(',').map((language) => {
            let parts = language.split(';');
            return {
                name: parts[0],
                q: parts[1] || 1
            };
        }).filter((language) => { //过滤掉服务器端不能提供的语言
            return languages.indexOf(language.name) !== -1;
        }).sort((a, b) => { //按权重由大到小进行排序
            return a.q - b.q;
        }).map((item) => {
            return item.name;
        });
    }

    return function (req, res, next) {
        let acceptLanguages = req.headers['accept-language'];
        req.acceptLanguage = parse(acceptLanguages)[0] || languages[0];
        next();
    };
}

app.use(checkLanguage(['en', 'zh']));

app.get('/', (req, res) => {
    res.setHeader('Content-Language', req.acceptLanguage);
    let _path =
        res.sendFile(path.join(__dirname, req.acceptLanguage, 'index.html'));
});

app.listen(8080);