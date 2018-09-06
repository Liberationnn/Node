/**
 * 可以对传入的对象链式添加一系列验证规则，然后开始逐条验证
 */
let options = {
  method: 'get',
  dataType: 'json'
};

function Validate(options) {
  this.options = options;
  this.rules = [];
}

Validate.prototype = {
  addRule: function (key, msg, check) {
    this.rules.push({key, msg, check});
    return this;
  },
  start: function () {
    this.rules.forEach((rule) => {
      if (!rule.check(this.options[rule.key])) {
        throw new Error(rule.msg);
      }
    }, this);
  }
};

let validate = new Validate(options);
validate.addRule('method', '请求方式不合法', (value) => /(get|post)/.test(value))
  .addRule('dataType', '数据类型不合法', (value) => /(json|text)/.test(value));