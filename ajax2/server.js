let express = require('express');
let bodyParser = require('body-parser');
let fs = require('fs');
let app = express();

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/books', (req,res) => {
  console.log(req.body);
  fs.readFile('./books.json', (err, data) => {
    if (!err) {
      res.send(data);
    }
  })
});

app.listen(8080);