function isType(type) {
  return function (obj) {
    return Object.prototype.toString.call(obj) === '[object ' + type + ']';
  };
}
let utils = {};
['Object', 'Array', 'Function', 'Date', 'RegExp'].forEach((type) => {
  utils['is' + type] = isType(type);
});

console.log(utils.isObject({}));
console.log(utils.isArray([]));
console.log(utils.isFunction(new Function()));
console.log(utils.isDate(new Date()));
console.log(utils.isRegExp(new RegExp('')));