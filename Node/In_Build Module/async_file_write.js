const fs = require('node:fs/promises');

async function createFile() {
    try {
        await fs.writeFile('demo.txt', 'Async Await using For Creating Function');
        console.log('File Created Successfully');
    } catch (error) {
        console.log(error.message);
    }
}

createFile();