let util = require('util');

function Parent() {
    this.name = 'Parent';
    this.age = 6;
    this.say = function () {
        console.log('hello', this.name);
    }
}
Parent.prototype.showName = function () {
    console.log(this.name);
};

function Child() {
    // Parent.call(this);
    this.name = 'Child';
}

util.inherits(Child, Parent);
let child = new Child();
child.showName();
// console.log(child.age);
// console.log(child.say());
console.log(child.__proto__.__proto__.__proto__ === Object.prototype);


function Person() {
    this.name = 'person';
    this.parent = {
        name: 'parent',
        child: {
            name: 'child'
        }
    }
}
Person.prototype.toString = function () {
    console.log('我的名字是: ' + this.name);
};

let p = new Person();
p.toString();
/**
 * showHidden 是否显示隐藏属性
 * depth 对象的递归显示的深度
 * colors 是否显示颜色
 */
console.log(util.inspect(p, true, 2, true));