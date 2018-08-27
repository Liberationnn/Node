// 通过new Buffer()创建buffer
const buf1 = new Buffer([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
const buf2 = new Buffer('buffer');
// buf1.fill(0);
// buf2.fill(0);
console.log('buf1: ', buf1);
console.log('buf2: ', buf2);


let str = '中国';
let buf3 = new Buffer(str);
console.log('str.length: ', str.length);
console.log('buf3.length: ', buf3.length);


let buf4 = new Buffer(6);
buf4.write('中', 0, 3);
buf4.write('国', 3, 6);
console.log('buf4: ', buf4.toString());


let buffer = new Buffer('中国');
let buf5 = buffer.slice(0, 4);
let buf6 = buffer.slice(4);
console.log('有乱码的时候: ', buf5.toString(), buf6.toString());
let StringDecoder = require('string_decoder').StringDecoder;
let decoder = new StringDecoder();
console.log('没有乱码的时候: ', decoder.write(buf5), decoder.write(buf6));


let srcBuf = new Buffer([4, 5, 6]);
let tarBuf = new Buffer(6);
tarBuf[0] = 1;
tarBuf[1] = 2;
tarBuf[2] = 3;
srcBuf.copy(tarBuf, 3, 1, 2); //包前不包后，只取索引为1的5
console.log(tarBuf);
console.log(Buffer.isEncoding('utf-8'));

let buf7 = new Buffer([1, 2, 3]);
let buf8 = new Buffer([4, 5, 6]);
let concatBuf = Buffer.concat([buf7, buf8], 5);
console.log(concatBuf);