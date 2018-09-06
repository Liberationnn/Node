let fs = require('fs');
let EventEmitter = require('events');
let util = require('util');

function LineReader(path) {
  this._rs = fs.createReadStream(path);
}

let RETURN = 0x0d; // \r
let NEWLINE = 0x0a; // \n

util.inherits(LineReader, EventEmitter);
LineReader.prototype.on('newListener', function (eventName, listener) {
  if (eventName === 'newLine') {
    let row = [];
    let self = this;

    this._rs.on('readable', function () {
      let buffer;
      while ((buffer = this.read(1)) !== null) {
        if (buffer[0] === RETURN) {
          this.read(1);
          self.emit('newLine', Buffer.from(row));
          row.length = 0;
        } else {
          row.push(buffer[0]);
        }
      }
    });
    this._rs.on('end', function () {
      if (row.length > 0) {
        self.emit('newLine', Buffer.from(row));
      }
      self.emit('end');
    });
  }
});


let lineReader = new LineReader('./index.txt');
lineReader.on('newLine', (row) => {
  console.log(row.toString());
});
lineReader.on('end', () => {
  console.log('end');
});