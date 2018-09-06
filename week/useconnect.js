let connect = require('./connect');

let app = connect();

app.use((req, res, next) => {
  res.send = (html) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.end(html);
  };
  next();
});

// app.use((req, res) => {
//   res.send('hello');
// });

app.get((req, res) => {
  res.send('get');
});

app.post((req, res) => {
  res.send('post');
});

app.all((req, res) => {
  res.send('404');
});

app.listen(8080);