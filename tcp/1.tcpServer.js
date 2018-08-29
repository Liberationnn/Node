let net = require('net'),
    util = require('util');

// net.Socket 双工流 Duplux
let server = net.createServer((socket) => {
    console.log(util.inspect(socket.address()));
    // 查看当前连接数量
    server.getConnections((err, count) => console.log(count));
    socket.on('error', (err) => {
        console.log(err);
        socket.destroy();
    });
    socket.on('close', (err) => {
        console.log(err);
        socket.destroy();
    });
});

server.on('error', (err) => console.log(err));
server.listen(8080, '0.0.0.0', 511, () => {
    console.log(util.inspect(server.address()));
    // 服务启动4秒后关闭服务
    setTimeout(() => server.close(), 4000);
});
server.on('close', () => console.log('服务器正常关闭'));