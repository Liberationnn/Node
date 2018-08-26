let EventEmitter = require('events');
let util = require('util');

function Bell(name) {
    this.name = name;
}
util.inherits(Bell, EventEmitter);

let jingleBell = new Bell('jingle');

// on和addListener完全一样
jingleBell.on('ring', function () {
    console.log('收到礼物1');
});
jingleBell.addListener('ring', function () {
    console.log('收到礼物2');
});
// once只会执行一次，执行完成后事件解绑
jingleBell.once('lose', function () {
    console.log('铃铛丢了');
});

// 移除绑定在ring上的所有事件
// jingleBell.removeAllListeners('ring');

jingleBell.emit('ring'); // 会重复触发
jingleBell.emit('ring'); // 会重复触发
jingleBell.emit('lose'); // 只触发一次
jingleBell.emit('lose'); //第二次不会触发
