/**
 * 图片防盗链
 * Referer:http://localhost:63342/test/express-ext/img.html?_ijt=nmbkj7edq005gd9uj3a6qgaktc
 */
let express = require('express'),
    path = require('path');
let app = express();

// 判断用户是否有权限访问此图片
app.use('/img', function (req, res, next) {
    let referer = req.headers.referer;
    if (!referer) {
        next();
    } else {
        
    }
});
app.use(express.static(__dirname));

// 返回html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'img.html'));
});

app.listen(8080);