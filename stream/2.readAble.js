let fs = require('fs');

let data = fs.readFileSync('read.txt');
console.log(data.toString(),data.length);

let rs = fs.createReadStream('read.txt', {start: 1, end: 7, highWaterMark: 3});
let buffers = [];
rs.on('readable', () => {
    console.log('=====readable=====');
    let buffer;
    while ((buffer = rs.read(1)) !== null) {
        buffers.push(buffer);
    }
});
rs.on('end', () => console.log(Buffer.concat(buffers).toString()));