let http = require('http');

http.createServer();

module.exports = function () {
  let app = function (req, res) {
    let index = 0;

    function next() {
      let fn = app.stack[index++];
      fn(req, res, next);
    }

    next();
  };

  app.stack = [];

  app.use = function (fn) {
    this.stack.push(fn);
  };

  let methods = ['get', 'post', 'all'];
  methods.forEach((method) => {
    app[method] = function (fn) {
      app.stack.push(function (req, res, next) {
        req.method.toLowerCase() === method ? fn(req, res) : next();
      });
    };
  });

  app.all = function (fn) {
    app.stack.push(function (req, res, next) {
      fn(req, res);
    });
  };

  app.listen = function () {
    let server = http.createServer(this);
    server.listen.apply(server, arguments);
  };

  return app;
};