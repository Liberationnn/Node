let fs = require('fs');

let copy = (src, tar, length = 9) => {
    let fileLength = fs.readFileSync(src).length,
        offset = 0,
        position = 0,
        buffer = new Buffer(fileLength);

    fs.open(src, 'r', (err, fd) => { //fd为src文件的描述符
        fs.open(tar, 'w', (err2, fd2) => { //fd2为tar文件的描述符
            (function read() {
                length = (position + length > fileLength) ? (fileLength - position) : length;
                // 分块读取数据
                fs.read(fd, buffer, offset, length, position, (err, bytesRead) => {
                    // 分块写入数据
                    fs.write(fd2, buffer, offset, length, position, (err, bytesWritten) => {
                        offset += length;
                        position += length;
                        if (position === fileLength) { //已写入完毕
                            console.log(buffer.toString());
                        } else { //未写入完毕
                            read();
                        }
                    });
                });
            })();
        });
    });
};

copy('fdRead.txt', 'copy.txt');