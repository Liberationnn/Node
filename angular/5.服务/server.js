let express = require('express');
let app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Header', 'Content-Type');
  next();
});

app.get('/401', (req, res) => {
  res.statusCode = 401;
  res.send("401");
});
app.get('/403', (req, res) => {
  res.statusCode = 403;
  res.end("403");
});
app.get('/404', (req, res) => {
  res.statusCode = 404;
  res.end("404");
});
app.get('/500', (req, res) => {
  res.statusCode = 500;
  res.end("500");
});

app.listen(8080);