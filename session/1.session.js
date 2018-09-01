let app = require('express')(),
    session = require('express-session');

app.use(session({
    secret: 'sr', //secret的值建议使用随机字符串
    cookie: {maxAge: 30 * 60 * 1000}, //过期时间(毫秒)
    resave: true,
    saveUninitialized: true
}));
app.get('/', (req, res) => {
    if (req.session.sign) { //检查用户是否已经登录
        req.session.count++;
        console.log(req.session); //打印session的值
        res.send(`欢迎<strong>${req.session.name}</strong>第${req.session.count}次登录`);
    } else {
        req.session.sign = true;
        req.session.name = '孙瑞';
        req.session.count = 0;
        res.send('欢迎登录');
    }
});

app.listen(8080);