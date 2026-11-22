console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

setImmediate(() => {
    console.log("C");
});

process.nextTick(() => {
    console.log("D");
});

Promise.resolve().then(() => {
    console.log("E");
});

console.log("F");


// Executioin Sequence 

// A, F → Synchronous code.
// D → Next-tick queue.
// E → Promise microtask queue.
// B, C → setTimeout(0) aur setImmediate() ka relative order top-level code mein guaranteed nahi hota.