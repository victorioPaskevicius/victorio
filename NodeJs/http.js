const http = require('http')

http.createServer(function (request,response) {
    console.log(request.url)
    if (request.url === '/about') {
        response.write('Acerca de')
        return response.end()
    }

    response.write('hello world')
    response.end()
}).listen(3001)
console.log('servidor escuchando en el puesto 3001')