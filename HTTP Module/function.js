const http = require('http');

const server = http.createServer((req,res) =>{
    res.write('Hello Pankaj')
    res.write('How are u ??')

    res.end('Server Close')
})

server.listen(3131, () =>{
    console.log('Server Started at 3131');
    
})