/**
 * 事件
 * 订阅发布
 */
function Person(name) {
    this.name = name;
    this._events = {};
}

// 注册监听
Person.prototype.on = function (eventName, callback) {
    if (this._events[eventName]) {
        this._events[eventName].push(callback);
    } else {
        this._events[eventName] = [callback];
    }
};

Person.prototype.emit = function (eventName) {
    let args = Array.prototype.slice.call(arguments, 1);
    let callbacks = this._events[eventName];
    let that = this;
    callbacks.forEach(function (callback) {
        callback.apply(that, args);
    });
};

let girl = new Person();
girl.on('长发及腰', function () {
    console.log('我娶你可好');
});
girl.on('长发及腰', function () {
    console.log('记得撩');
});

girl.emit('长发及腰');