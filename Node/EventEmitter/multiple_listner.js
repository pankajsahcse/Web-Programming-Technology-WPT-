const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('test', () => {
    console.log('First');
});

emitter.on('test', () => {
    console.log('Second');
});

emitter.emit('test');

// Both will run 
// First
// Second