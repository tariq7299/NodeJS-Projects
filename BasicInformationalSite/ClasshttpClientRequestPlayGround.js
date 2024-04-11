const http = require('http');

// Example 1: Making a simple GET request
// const req = http.request('http://example.com', (res) => {

// // 'response' event handler


//   console.log(`Status Code: ${res.statusCode}`);

//   // Testing response.read() method
//   const responsContentRecieved = res.read() 
//   console.log('responsContentRecieved', responsContentRecieved)

  

//   // Testing 'data' event handler
//   // Listen for data chunks received from the server
//   res.on('data', (chunk) => {
//     console.log(`Body: ${chunk}`);
//     const bodySizeInBytes = Buffer.byteLength(chunk)
//     console.log('bodySizeInBytes', bodySizeInBytes)
//   });

//   // Testing 'end' event hadndler
//   res.on('end', () => {
//     console.log('No more data in response.');
//   });
// });

// // Testing 'error' event handler
// req.on('error', (e) => {
//   console.error(`problem with request: ${e.message}`);
// });

// Set request header
// req.setHeader('plexFlex', 'text/plain')
// let plexFlex = req.getHeader('plexFlex')
// console.log('plexFlexHeader', plexFlex)

// Send the request
// req.end();


// Example 2: Modifying request headers
const postData = JSON.stringify({ message: 'Hello, world!' });
const options = {
  hostname: 'example.com',
  port: 80,
  path: '/',
  method: 'post',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData),
    'X-Custom-Header': 'value',
  }
};

const req2 = http.request(options, (res) => {
  console.log(`Status Code: ${res.statusCode}`);

  res.on('data', (chunk) => {
    console.log(`Body: ${chunk}`);
  });

  // Attach a 'close' event listener
  res.on('close', () => {
  console.log('Client connection closed.');
  });

  res.on('end', () => {
    console.log('No more data in response.');
  });

});

req2.setHeader('X-Another-Header', 'value');


// Testing getHeaders()
const headers = req2.getHeaders()
console.log('headers', headers)
req2.removeHeader('X-Custom-Header');

// Write the request body
req2.write(postData);

req2.end();

