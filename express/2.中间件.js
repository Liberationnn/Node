let express = require('express');
let app = express();

app.use((req, res, next) => {
    req.money = 100;
    next();
});
app.use((req, res, next) => {
    req.money -= 10;
    next();
});
app.use((req, res, next) => {
    req.money -= 80;
    next();
});
app.use((req, res, next) => {
    res.end(req.money.toString());
});


app.all('*', (req, res) => {
    res.send('页面不存在');
});

app.listen(8080);