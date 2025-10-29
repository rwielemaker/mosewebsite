// server.js
const http = require('http');

const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>My Test Website</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
            text-align: center;
            padding-top: 100px;
          }
          h1 { color: #333; }
          p { color: #555; }
        </style>
      </head>
      <body>
        <h1>Hello from Node.js!</h1>
        <p>Your website is working 🎉</p>
      </body>
    </html>
  `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
