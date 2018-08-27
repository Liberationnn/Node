let fs = require('fs');

/**
 * 异步方式把字符串写入文件
 * r:read  w:write  e:execute
 * 可读     可写     可执行
 * -rw-r--r--
 * -rw- 创建者拥有的权限
 * r-- 所属组
 * r-- 其他人
 */


fs.writeFile('write.txt', '第一行', {encoding: 'utf-8', flag: 'w'}, (err) => {
});

// fs.writeFile('write.txt', '\n第二行', {encoding: 'utf-8', flag: 'a'}, (err) => {
//     fs.readFile('write.txt', 'utf-8', (err, data) => {
//         console.log(data);
//     });
// });

fs.appendFile('write.txt', '\n第二行', 'utf-8', (err) => {
    fs.readFile('write.txt', 'utf-8', (err, data) => {
        console.log(data);
    });
});
