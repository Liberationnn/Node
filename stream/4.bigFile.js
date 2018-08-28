let fs = require('fs');

let rs = fs.createReadStream('read2.txt');
let ws = fs.createWriteStream('write2.txt');

rs.on('data', (data) => console.log(ws.write(data)));
ws.on('drain', () => console.log('drain: 缓存区已排空'));