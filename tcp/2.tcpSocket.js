let net = require('net'),
    util = require('util');

let server = net.createServer((socket) => {
    // console.log(util.inspect(socket.address()));
    socket.setEncoding('utf-8');
    socket.on('data', (data) => {
        console.log(`已经接收到${socket.bytesRead}个字节`);
        socket.write(`服务器收到: ${data}`);
    });
    socket.on('close', (err) => console.log('close: ' + err));
    socket.on('end', (err) => console.log('end: ' +err));
});
server.on('error', (err) => console.log(err));
server.on('close', () => console.log('服务器正常关闭'));
server.listen(8080, () => console.log(util.inspect(server.address())));