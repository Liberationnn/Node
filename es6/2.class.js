class Person {
  constructor(name) {
    this.name = name;
    this.age = 22;
    this.hobbies = [];
  }

  getName() {
    return '姓名: ' + this.name;
  }

  get hobby() {
    return this.hobbies;
  }

  set hobby(hobby) {
    this.hobbies.push(hobby);
  }
}

class Student extends Person {
  constructor(name, num) {
    super(name);
    this.num = num;
  }

  getNum() {
    console.log('学号:', this.num);
  }
}

let p = new Person('sr');
console.log(p, p.getName());
p.hobby = '玩';
p.hobby = '睡觉';
console.log('person爱好:', p.hobby);
console.log();

let s = new Student('srr', 233);
console.log(s);
s.hobby = '前端';
s.hobby = '学习';
console.log('student爱好:', s.hobby);
s.getNum();