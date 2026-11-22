const os = require('os');

console.log(os.platform());
console.log(os.arch());
console.log(os.totalmem());
console.log(os.freemem());

console.log("Total RAM:", (os.totalmem() / 1024 ** 3).toFixed(2), "GiB");

console.log("Free RAM:", (os.freemem() / 1024 ** 3).toFixed(2), "GiB");