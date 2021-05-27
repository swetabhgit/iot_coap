
const coap = require('coap')// or coap

const coapConnection = {
    host: 'localhost',
    pathname: '/yo',
    method: 'GET',
    confirmable: true
}


const req = coap.request(coapConnection)



req.on('response', function (res) {
    res.pipe(process.stdout)
})

req.end()