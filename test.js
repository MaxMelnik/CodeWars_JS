const bind = require('./bind');

function logPerson(info) {
    console.log(`Person: ${this.name}, ${this.age}, ${info}`);
}

const person1 = {name: 'You', age: 27};

bind(person1, logPerson)('text');
