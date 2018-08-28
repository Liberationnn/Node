let fs = require('fs');

let rs = fs.createReadStream('read.txt');
let ws = fs.createWriteStream('write.txt');

ws.on('open', () => console.log('写入文件已经打开'));
rs.on('data', (data) => {
    ws.write(data);
});
rs.on('end', () => {
    ws.end('写入完成', () => {
        console.log('写入完毕');
        console.log(`共写入${ws.bytesWritten}个字节`);
    });
});
// ws.on('end', () => console.log(''))