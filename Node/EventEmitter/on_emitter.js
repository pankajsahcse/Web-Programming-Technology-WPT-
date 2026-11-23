const { log } = require('console');
const EventEmitter = require ('events');

const emitter = new EventEmitter();

emitter.on('greet', () =>{
    console.log('Hello Node js From Emitter On');
    
})

emitter.emit('greet');


emitter.on('add' , (a,b) =>{
    console.log(a + b);
    
})

emitter.emit('add',10,20)