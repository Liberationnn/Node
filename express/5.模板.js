let express = require('express');
let app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname);

app.get('/', (req, res) => {
    res.render('index', {
        name: 'sr',
        age: 22
    });
});

app.listen(8080);