let fs = require('fs');
let StringDecoder = require('string_decoder').StringDecoder;

let rs = fs.createReadStream('request.txt');
// 解析头部
let parseHeader = (callback) => {
    let headers = '';
    let decoder = new StringDecoder();

    let onReadable = () => {
        let chunk;
        while ((chunk = rs.read()) !== null) {
            let str = decoder.write(chunk);
            if (str.match(/\r\n\r\n/)) {
                rs.removeListener('readable', onReadable);
                let splits = str.split(/\r\n\r\n/);
                headers += splits.shift();
                let buffer = new Buffer(splits[0]);
                if (buffer.length) {
                    rs.unshift(buffer);
                    callback(headers);
                }
            } else {
                headers += str;
            }
        }
    };

    rs.on('readable', onReadable);
};

parseHeader((headers) => {
    console.log(headers);
    rs.on('data', (data) => {
        console.log('\n' + data.toString());
    });
});