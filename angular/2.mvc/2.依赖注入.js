// 注册表
let registry = {
  $http: {},
  countService: {
    count: 0,
    add: function () {
      this.count++;
    }
  }
};

function greet(countService) {
  countService.add();
  console.log(countService.count);
}

let inject = function (func, context) {
  let src = func.toString();
  let matcher = src.match(/function\s?\w+\((\w+)\)/);
  let argNames = matcher.slice(1);
  let args = [];
  for (let i = 0; i < argNames.length; i++) {
    let argObj = registry[argNames[i]];
    args.push(argObj);
  }
  func.apply(context, args);
};

inject(greet);