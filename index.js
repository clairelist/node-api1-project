const server = require('./api/server');

const port = 9000;

// START YOUR SERVER HERE
server.listen(port,()=>{
    console.log(`Listening on the specified port (${port})`)
});