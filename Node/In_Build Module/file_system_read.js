const fs = require('fs');

const data = fs.readFileSync('demo.txt', 'utf8');  // 'utf8' nahi denge toh Buffer return hoga

console.log(data);


console.log('Using Call Back function Async');


fs.readFile('demo.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(data);
});
