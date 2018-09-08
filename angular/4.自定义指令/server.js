let express = require('express');
let bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.json());

app.post('/checkUser', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  let data = req.body;
  if (data.username === 'admin') {
    res.send({unique: false});
  } else {
    res.send({unique: true});
  }
});

app.options('/checkUser', (req,res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.send();
});

app.listen(8080);