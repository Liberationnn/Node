let fs = require('fs');
let buffer = new Buffer('第三句话，第二句话，第一句话');
let bufferLength = buffer.length,
    offset = 0,
    length = 3,
    position = 0;

fs.open('fdWrite.txt', 'w', (err, fd) => {
    (function write() {
        length = (position + length > bufferLength) ? (bufferLength - position) : length;
        fs.write(fd, buffer, offset, length, position, (err, bytesWritten) => {
            offset += length;
            position += length;
            if (position === bufferLength) {
                fs.readFile('fdWrite.txt', 'utf-8', (err, data) => {
                    console.log(data);
                });
            } else {
                write();
            }
        });
    })();
});