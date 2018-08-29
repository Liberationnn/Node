let net = require('net'),
    util = require('util'),
    fs = require('fs');

let ws = fs.createWriteStream('socket.txt');
let server = net.createServer((socket) => {
    console.log(util.inspect(socket.address()));
    // 客户端停止写入时也不关闭目标文件
    socket.pipe(ws, {end: false});
    socket.on('end', () => {
        ws.end('再见');
        socket.unpipe(ws);
    })
});
server.on('error', (err) => console.log(err));
server.on('close', () => console.log('服务器正常关闭'));
server.listen(8080, () => console.log(util.inspect(server.address())));