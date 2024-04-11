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
});

const agent = new http.agent({keepAlive: true, keepAliveMsecs: 2000, maxSockets: 2})


agent.on('socket', (socket) => {
    console.log('New socket assigned:', socket.remoteAddress);
});
agent.on('free', (socket) => {
    console.log('Socket became available for reuse:', socket);
});
agent.on('idle', (socket) => {
    console.log('Agent is idle');
});
agent.on('close', (socket) => {
    console.log('Agent was closed');
});
agent.on('agentRemove', (socket) => {
    console.log('Socket was removed from the agent:', socket);
});
  
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
