let say = (name, word) => {
    console.log(name, ':', word);
};

// let newSay = say.bind(null, '张三');
let newSay = (word) => {
    say.call(null, '张三', word);
};

newSay('我爱你');
newSay('i love you');


let eat = (times, callback) => {
    let i = 0;
    return () => {
        if (++i === times) {
            callback();
        }
    };
};
let newEat = eat(5, () => {
    console.log('我吃完了');
});
newEat();
newEat();
newEat();
newEat();
newEat(); //只有第五次才有输出