const http = require('node:http');
const fs = require('node:fs');

const hostname = '192.168.1.8';
const port = 8080;

const agent = new http.Agent()

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


agent.on('socket', (socket) => {
    console.log('New socket assigned:', socket.remoteAddress);
});
agent.on('free', (socket) => {
    console.log('Socket became available for reuse:', socket);
});
agent.on('idle', () => {
    console.log('Agent is idle');
});
agent.on('close', () => {
    console.log('Agent was closed');
});
agent.on('agentRemove', (socket) => {
    console.log('Socket was removed from the agent:', socket);
});
  
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);

  // Make requests to the server to test the Agent configuration
});