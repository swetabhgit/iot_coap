var coap = require('../git-coap/node-coap')
    , server = coap.createServer()

server.on('request', function (req, res) {
    console.log(req, "test")
    res.end('Hello ')
})

// the default CoAP port is 5683
server.listen(function () {
    console.log("server started")
})