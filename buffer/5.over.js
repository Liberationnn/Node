let buf = new Buffer(2);
buf[0] = -10;
buf[1] = 260;

// 如果大于255，会对256取模，如果小于0，先模上256再加上256
console.log(buf);