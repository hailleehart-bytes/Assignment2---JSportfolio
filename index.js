// server.mjs
import { createServer } from 'node:http';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

var connect = require('connect');
var http = require('http');
var app = connect();
function helloworld(req,res,next)
{
    res.setheader('Content-Type', 'text/plain')
    res.end('Hello World')
}
app.use(function middleware1(req, res, next) {
  // middleware 1
  next();
});
// run with `node server.mjs`
