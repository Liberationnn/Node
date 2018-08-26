let Person = require('./Person');

let p1 = new Person('sr', 22);
console.log(p1.getName(), p1.getAge());
p1.setName('sx');
p1.setAge(21);
console.log(p1.getName(), p1.getAge());

/**
 * 1. 核心模块 http fs
 * 2. 通过路径加载
 * 3. 其他的文件模块
 */
