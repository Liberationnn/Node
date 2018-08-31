let express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    fs = require('fs');
let app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use((req, res, next) => {
    console.log(req.headers['content-type']);
    next();
});
app.set('view engine', 'html');
app.set('views', __dirname);
app.engine('html', require('ejs').__express);

app.post('/post', (req, res) => {
    res.send(req.body);
});
app.get('/', (req, res) => {
    res.render('index', {
        name: 'sr',
        age: 22
    });
});

app.listen(8080);