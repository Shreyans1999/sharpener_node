const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title><head>');
    res.write('<body>');
    // Read messages from file and display them at the top
    fs.readFile('message.txt', 'utf8', (err, data) => {
      if (!err) {
        const messages = data.split('\n').filter(msg => msg.trim() !== '');
        res.write('<ul>');
        messages.forEach(msg => {
          res.write(`<li>${msg}</li>`);
        });
        res.write('</ul>');
      }
      res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>');
      res.write('</body>');
      res.write('</html>');
      res.end();
    });
  } else if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      // Append new message to file
      fs.appendFile('message.txt', message + '\n', (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log('Message appended successfully');
      });
      res.statusCode = 302;
      res.setHeader('Location', '/');
      return res.end();
    });
  } else {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title><head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
  }
});

server.listen(3000);
