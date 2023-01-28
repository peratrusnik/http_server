const http = require('http')
let fs = require('fs')


const server = http.createServer((req, res) => {
    let urlPath = req.url;
    let file = fs.readFileSync('./index.html')
    
    if (urlPath === "/") {
        res.writeHead(200,{"Content-Type":"text/html"})
        res.end(file)
    } else if (urlPath === "/student") {
        let data = [{
            name: "Pera",
            age: 33
        },
        {
            name: "Laza",
            age: 44
        }]    
        
        res.writeHead(200,{"Content-Type":"application/json"})
        // res.write("Hello user")
        res.end(JSON.stringify(data))
    }
})

server.listen(3000, ()=>console.log('Server running on 3000'))