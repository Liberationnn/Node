/**
 * forEach的兼容写法
 */
let utils = {
  each: (function () {
    if (Array.prototype.forEach) {
      return function (arr, fn, context) {
        arr.forEach(fn, context);
      };
    } else {
      return function (arr, fn, context) {
        for (let i = 0; i < arr.length; i++) {
          fn.call(context, arr[i], i, arr);
        }
      };
    }
  })()
};

utils.each([1, 2, 3], function (item, index, all) {
  console.log(this.name, item, index, all);
}, {name: 'sr'});