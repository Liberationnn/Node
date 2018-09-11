let express = require('express');
let fs = require('fs');
let app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/books.json', (req, res) => {
  fs.readFile('./books.json', (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.send('读取文件失败');
    } else {
      res.statusCode = 200;
      res.send(data);
    }
  });
});

app.listen(8080);