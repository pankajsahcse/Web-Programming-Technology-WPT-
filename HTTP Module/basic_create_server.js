const http = require('http');

const server = http.createServer((req, res) => {
    res.end('<h1>Hello From Node server</h1>')


    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);
})



server.listen(3131, () => {
    console.log('Server is Runnning on the 3131 Port~');

})