/**
 global === window 全局对象
 module 当前模块对象
 exports 导出对象
 require 加载模块的方法
 __dirname 当前模块所在目录的绝对路径
 __filename 当前模块的绝对路径
 */

process.on('uncaughtException', (e) => {
    console.log('uncaughtException: ' + e.message);
});

process.stdout.write('hello\n');

console.log(process.pid);

process.stdin.on('data', (data) => {
    console.log('嘤嘤嘤: ' + data);
});

process.on('exit', () => {
    console.log('退出前执行');
});

console.log(a);