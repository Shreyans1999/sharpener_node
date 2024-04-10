const http = require('http');

const server = http.createServer((req, res) => {
    // Parse the URL
    const url = req.url;

    // Set response headers
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // Check the URL and send appropriate response
    if (url === '/home') {
        res.end('Welcome home');
    } else if (url === '/about') {
        res.end('Welcome to About Us page');
    } else if (url === '/node') {
        res.end('Welcome to my Node Js project');
    } else {
        res.end('Page not found');
    }
});

// Start the server and listen on port 3000
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
