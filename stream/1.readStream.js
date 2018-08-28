let fs = require('fs');

let rs = fs.createReadStream('read.txt', {encoding: 'utf-8', start: 1, end: 5, highWaterMark: 3});
rs.on('data', (data) => {
    console.log(data);
    rs.pause(); //暂停触发
    setTimeout(() => {
        rs.resume(); //恢复触发
    }, 3000);
});
rs.on('end', () => console.log('读取完成'));
rs.on('open', () => console.log('打开文件'));
rs.on('close', () => console.log('关闭文件'));