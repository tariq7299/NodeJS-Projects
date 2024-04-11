const http = require('node:http');
const fs = require('node:fs');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        fs.readFile('index.html', (err, data) => {
            if (err) {
                console.error("Error")
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.end(data);
            }      
        }); 
    };
    if (req.url == "/about") {
        fs.readFile('about.html', (err, data) => {
            if (err) {
                console.error("Error")
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.end(data);
            }      
        }); 
    }
    if (req.url == "/contact-me") {
        fs.readFile('contact-me.html', (err, data) => {
            if (err) {
                console.error("Error")
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.end(data);
            }      
        }); 
    }
});
