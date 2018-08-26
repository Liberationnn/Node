let EventEmitter = require('events');
let fs = require('fs');

let events = new EventEmitter();
let person = {};
let out = () => {
    if (person.name && person.age) {
        console.log(person.name, person.age);
    }
};

events.on('data', out);

fs.readFile('name.txt', 'utf-8', (err, data) => {
    person.name = data;
    events.emit('data');
});
fs.readFile('age.txt', 'utf-8', (err, data) => {
    person.age = data;
    events.emit('data');
});