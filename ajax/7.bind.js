let utils = {
  bind: (function () {
    // if (Function.prototype.bind) {
    //   return function (func, context) {
    //     func.bind(context);
    //   };
    // } else {
      return function (func, context) {
        return function () {
          func.apply(context, arguments);
        };
      };
    // }
  })()
};

function say(word) {
  console.log(this.name, word);
}

let obj = {name: 'sr'};
let newSay = utils.bind(say, obj);
newSay('hello');