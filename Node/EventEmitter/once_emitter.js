const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.once('login', () => {
    console.log('User Logged In');
});

emitter.emit('login');
emitter.emit('login');
emitter.emit('login');

// here only one time run