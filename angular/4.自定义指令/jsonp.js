let express = require('express');
let app = express();

app.get('/checkUser', (req, res) => {
  let {username, callback} = req.query;
  let jsonData = '';

  if (username === 'admin') {
    jsonData = JSON.stringify({unique: false});
    res.send(`${callback}(${jsonData})`);
  } else {
    jsonData = JSON.stringify({unique: true});
    res.send(`${callback}(${jsonData})`);
  }
});

app.listen(8080);