const http = require('http');
const app = require('./app');


const server = http.createServer(app);


server.listen(4500, () => {
    console.log(`Server running on PORT ${server.address().port}`)
})