let dgram = require('dgram');

/**
 * 创建socket
 * let socket = dgram.createSocket(type, [callback]);
 * type: 协议类型，可以为udp4或者udp6
 * callback = function(msg, rinfo): 收到数据时的回调函数
 *   msg: 收到的数据
 *   rinfo:
 *     address: 发送者的IP
 *     family: 地址类型
 *     port: 发送者的socket端口号
 *     size: 发送者发送的数据的字节数
 */
let socket = dgram.createSocket('udp4', (msg, rinfo) => {
    console.log(msg.toString());
    console.log(rinfo);
    socket.send(msg, 0, msg.length, rinfo.port, rinfo.address);
});

/**
 * 绑定地址和端口
 * socket.bind(port, [address], [callback]);
 * port: 绑定的端口号
 * address: 绑定的IP
 * callback: 绑定后的回调
 */
socket.bind(8080, 'localhost');

