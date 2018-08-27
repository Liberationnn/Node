let fs = require('fs');

let fileLength = fs.readFileSync('fdRead.txt').length,
    offset = 0,
    length = 9,
    position = 0;
let buffer = new Buffer(fileLength);

fs.open('fdRead.txt', 'r', (err, fd) => {
    (function read() {
        length = (position + length > fileLength) ? (fileLength - position) : length;
        fs.read(fd, buffer, offset, length, position, (err, bytesRead) => {
            offset += length;
            position += length;
            if (position === fileLength) { //已读取完毕
                console.log(buffer.toString());
            } else { //未读取完毕
                read();
            }
        });
    })();
});
