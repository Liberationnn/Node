let fs = require('fs');

let rs = fs.createReadStream('read2.txt', 'utf-8');
let ws = fs.createWriteStream('write3.txt', {highWaterMark: 1024});

rs.pipe(ws);

rs.on('data', (data) => {
    // 如果缓存区满了，就暂停读取数据
    if (!ws.write(data)) {
        rs.pause();
    }
});
// 缓存区排空后继续读取数据
ws.on('drain', () => rs.resume());