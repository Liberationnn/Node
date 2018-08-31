let url = require('url');

let urlObj = url.parse('http://name:password@srrrrr:2333/path/sub?name=sr&age=22#top');
console.log(urlObj);
// console.log(url.format(urlObj));