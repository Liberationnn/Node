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
    console.log(`客户端接收到了数据: ${msg}`);
});

/**
 * 发送数据
 * socket.send(buf, offset, length, port, address, [callback]);
 * buf: 要发送的数据
 * offset: 从缓存区的第几个字节开始发送数据
 * length: 发送数据的字节数
 * port: 接收数据的端口号
 * address: 接受数据的IP
 * callback function(err, bytes){}: 发送完毕时所调的回调函数
 *   err: 发送出错时触发的错误对象
 *   bytes: 发送数据的字节数
 */
socket.send(Buffer.from('node学习中'), 0, 10, 8080, 'localhost', (err, bytes) => console.log(`发送了${bytes}个字节`));