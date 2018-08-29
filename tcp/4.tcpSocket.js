let net = require('net'),
    util = require('util'),
    fs = require('fs');

let ws = fs.createWriteStream('socket.txt');
let server = net.createServer((socket) => {
    socket.setTimeout(10 * 1000);
    socket.on('timeout', () => {
        socket.resume();
        socket.pipe(ws);
        socket.unpipe(ws);
    });
});
server.on('error', (err) => console.log(err));
server.on('close', () => console.log('服务器正常关闭'));
server.listen(8080, () => console.log(util.inspect(server.address())));