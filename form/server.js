let express = require('express');
let bodyParser = require('body-parser');
let fs = require('fs');
let app = express();

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/ajax', (req, res) => {
  console.log(req.query);
  res.send('hello');
});

app.listen(8080);