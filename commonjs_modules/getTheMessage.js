const fs = require('fs')

var obj = {
    1: 'one',
    2: 'two',
    3: 'three',
}
var path = './';
var message = '';

for(let i = 1; i <= 3; i++) {
    path += obj[i] + '/';
    for(let j = 1; j <= i; j++) {
        let stuff = require(`${path}${obj[i]}${j}`)
        message += stuff;
    }
}

console.log(message);