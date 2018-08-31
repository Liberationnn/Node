let express = require('express'),
    path = require('path');
let app = express();

app.use(express.static(path.join(__dirname, 'public'), {
    dotfiles: 'allow', //允许访问以.开头的文件
    index: 'index1.html', //设置目录索引文件
    setHeaders: function(res) { // 设置HTTP头的函数
        res.setHeader('myName', 'sr');
    }
}));
app.set('view engine', 'html');
app.set('views', __dirname);
app.engine('html', require('ejs').__express);

app.get('/', function (req, res) {
    res.render('index', {
        name: 'sr',
        age: 22
    });
});

app.listen(8080);