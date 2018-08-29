/**
 * 1.创建一个服务器
 * 2.客户端可以连接服务器
 * 3.客户端可以发言，然后广播给大家
 * 4.客户端连接和退出后都要通知大家
 * 5.显示当前的在线人数
 */
let net = require('net'),
    util = require('util');

let clients = {};
let broadcast = (nickName, msg) => {
    for (let name in clients) {
        if (name !== nickName) {
            clients[nickName].write(msg);
        }
    }
};

let server = net.createServer((socket) => {
    let nickName; //发言人的昵称
    socket.setEncoding('utf-8');
    server.getConnections((err, count) => {
        socket.write(`您好，当前在线${count}人，请输入用户名: \r\n>`);
    });
    socket.on('data', (data) => {
        data = data.replace(/\r\n/, '');
        if (nickName) {
            broadcast(nickName, `${nickName}: ${data}\r\n`);
        } else {
            nickName = data;
            clients[nickName] = socket;
            broadcast(nickName, `${nickName}加入了聊天室\r\n`);
        }
    });
    socket.on('end', () => {
        clients[nickName].destroy();
        delete clients[nickName];
        broadcast(nickName, `${nickName}离开了聊天室\r\n`);
    });
});
server.listen(8080);