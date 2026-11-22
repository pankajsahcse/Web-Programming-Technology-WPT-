const fs = require('node:fs/promises');

async function readData() {
    try {
        const data = await fs.readFile('demo.txt', 'utf8');

        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
}

readData();