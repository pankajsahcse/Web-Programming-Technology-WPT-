const EventEmitter = require('events');

const emitter = new EventEmitter();

function greet() {
    console.log('Hello This will run one time and off Emitter Remove this Emitter');
}

emitter.on('greet', greet);

emitter.emit('greet');



emitter.off('greet', greet);

emitter.emit('greet');