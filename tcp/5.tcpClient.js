let net = require('net');

/**
 * 创建socket
 * let socket = new net.Socket([options]);
 * options:
 *   fd: socket文件描述符
 *   type: 客户端协议，tcp4或tcp6
 *   allowHalfOpen: 是否允许半开连接
 */
let socket = new net.Socket({allowHalfOpen: true});
socket.setEncoding('utf-8');

/**
 * 连接TCP服务器
 * socket.connect(port, [host], [connectListener]);
 * port: 端口
 * host: 主机地址
 * connectListener: 连接成功后的监听
 */
socket.connect(8080, 'localhost', () => {
    socket.write('中国万岁');
    socket.on('data', (data) => console.log(data));
});