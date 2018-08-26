let say = (name, word) => {
    console.log(name, ':', word);
};

// let newSay = say.bind(null, '张三');
let newSay = (word) => {
    say.call(null, '张三', word);
};

newSay('我爱你');
newSay('i love you');

