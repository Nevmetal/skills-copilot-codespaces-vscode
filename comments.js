// Create a web server
// Start server with node comments.js
// View at http://localhost:3000

// Load the http module to create an http server.
var http = require('http');

// Create a function to handle every HTTP request
function handler(req, res){

    // Return a simple message
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello Node.js\n');
}

// Create a server that invokes the `handler` function upon receiving a request
http.createServer(handler).listen(3000);

// Put a friendly message on the terminal
console.log('Server running at http://