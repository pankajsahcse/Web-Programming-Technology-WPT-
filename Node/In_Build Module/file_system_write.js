
// import fs from 'node:fs';
// import * as fs from 'node:fs';  Both are correct ES Module Import

const fs = require('fs');  // Common js Module



console.log("before Writing the file")

fs.writeFile('demo.txt', 'Hello Node Js', (err) =>{
    if(err){
        console.log('Something Wrong' , err);
        return;
    }
    console.log("File Written Successfully");

})


fs.writeFileSync('demo1.txt', 'Hello Node.js from Sync function');

console.log('File Created');

console.log("after Writing the file")