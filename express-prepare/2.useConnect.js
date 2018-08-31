let connect = require('./2.connect');

let app = connect();
require('./2.middleWare')(app);
require('./2.route')(app);

app.listen(8080);