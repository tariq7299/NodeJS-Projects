const http = require('node:http');
const fs = require('node:fs');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {

    fs.readFile('index.html', (err, data) => {
        if (err) {
            console.error("Error")
        } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        }
        
        })

});



server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
