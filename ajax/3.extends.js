let utils = {
  /**
   *
   * @param _defaultOptions 默认配置
   * @param options 用户自定义配置
   */
  extends: function (_defaultOptions, options) {
    let result = {};
    for (let attr in _defaultOptions) {
      if (_defaultOptions.hasOwnProperty(attr)) {
        result[attr] = options[attr] || _defaultOptions[attr];
      }
    }
    return result;
  }
};

let _defaultOptions = {
  name: 'iphone',
  age: 7,
  type: 'mobile',
  localhost: '127.0.0.1'
};
let options = {
  name: 'sr',
  age: 22
};

console.log(utils.extends(_defaultOptions, options));
console.log(utils.extends(_defaultOptions, {}));