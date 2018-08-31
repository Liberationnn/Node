let express = require('express');
let app = express();

app.set('view engine', 'html');
app.set('views', __dirname);
app.engine('html', require('ejs').__express);

app.get('/', (req, res) => {
    res.render('index', {
        name: 'sr',
        age: 22
    });
});

app.listen(8080);