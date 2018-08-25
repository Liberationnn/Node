console.log(process.cwd()); //当前工作目录
console.log(__dirname);


process.chdir('..'); //改变当前目录（至上一级目录）
console.log(process.cwd());
console.log(__dirname);