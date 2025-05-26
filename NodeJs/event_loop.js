const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === "/") {
        res.write('Welocme to the server')
        return res.end()
    }else if (req.url === "/about") {
        // Blocking code
        for (let index = 0; index < 1000; index++) {
            console.log(Math.random()*index)
        }
        return res.end('About page')
    }else {
        res.end('page not found')
    }
})

server.listen(3000)
console.log('server on port 3000')