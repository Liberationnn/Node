let utils = {
  toQueryString: function (data) {
    let arr = [];
    for (let attr in data) {
      if (data.hasOwnProperty(attr)) {
        arr.push(encodeURIComponent(attr) + '=' + encodeURIComponent(data[attr]));
      }
    }
    return arr.join('&');
  }
};

function to (data) {
  return Object.keys(data).map((key) => {
    return key + '=' + data[key];
  }).join('&');
}

console.log(utils.toQueryString({name: 'sr', age: 22}));
console.log(to({name: 'sr', age: 22}));