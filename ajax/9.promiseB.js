/**
 * promise表示一个一步操作的结果，与之进行交互的方式主要是then方法
 * 1.跟状态有关 初始态 → 成功态 会告诉你最终的值
 *                   → 失败态 会告诉你失败的原因
 */
// 延迟对象
let Defer = function () {
  let func, failFn;
  return {
    resolve: function (value) {
      func(value);
    },
    reject: function (err) {
      failFn(err);
    },
    promise: {
      then: function (fn) {
        func = fn;
        return this;
      },
      fail: function (fn) {
        failFn = fn;
        return this;
      }
    }
  };
};

function later() {
  let defer = Defer();
  setTimeout(function () {
    defer.resolve('hello');
  }, 0);
  return defer.promise;
}

later().then(function (data) {
  console.log(data);
}).fail(function (err) {
  console.log(err);
});
