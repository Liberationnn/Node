let http = require('http'),
    url = require('url');

let proto = {};

function createServer() {
    function app(req, res) {
        app.handle(req, res);
    }

    // 把proto中的属性拷贝到app对象里
    Object.assign(app, proto);
    app.stack = [];

    return app;
}

proto.use = function (route, fn) {
    let path = route,
        handle = fn;
    if (typeof route === 'function') {
        path = '/';
        handle = route;
    }

    this.stack.push({path, handle});
};
proto.handle = function (req, res) {
    let stack = this.stack,
        index = 0;

    function next() {
        let {path: route, handle} = stack[index++];
        let {pathname} = url.parse(req.url);
        if (pathname.startsWith(route)) {
            handle(req, res, next);
        } else {
            next();
        }
    }

    next();
};
proto.listen = function (port) {
    let server = http.createServer(this);
    server.listen(port);
};

module.exports = createServer;