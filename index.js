const http = require('http');


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    const data = JSON.stringify({
        message: "Hello world",
        status: 200
    })
    res.end(data);
})


server.listen(4500, () => {
    console.log(`Server running on PORT ${server.address().port}`)
})