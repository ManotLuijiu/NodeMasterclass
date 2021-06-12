const { log } = require('console');
const express = require('express');
const http = require('http');
const http2 = require('http2');
const fs = require('fs');
const bodyParser = require('body-parser');

/**
 * Using Node.js
 */

// Using http
const server = http.createServer((req, res) => {
  const { headers, url, method } = req;
  log(headers, url, method);
  res.end();
});

/**
 * Using http2
 * https://stackoverflow.com/questions/58818303/how-to-implement-and-use-http-2-in-node-js
 * https://nodejs.org/api/http2.html#http2_server_side_example
 * https://stackoverflow.com/questions/55828540/simple-http2-nodejs-server-from-official-docs-postman-not-working
 * https://stackoverflow.com/questions/47460500/node-js-http2-server-error-socket-hang-up
 * https://engineering.circle.com/https-authorized-certs-with-node-js-315e548354a2
 * openssl req -x509 -newkey rsa:2048 -nodes -sha256 -subj '/CN=localhost' \
  -keyout localhost-privkey.pem -out localhost-cert.pem
 */

// const options = {
//   key: fs.readFileSync('localhost-privkey.pem'),
//   cert: fs.readFileSync('localhost-cert.pem'),
//   allowHTTP1: true,
// };
// const server = http2.createSecureServer(options, (req, res) => {
//   const {
//     socket: { alpnProtocol },
//   } = req.httpVersion === '2.0' ? req.stream.session : req;

//   res.writeHead(200, { 'content-type': 'application/json' });
//   res.end(
//     JSON.stringify({
//       alpnProtocol,
//       httpVersion: req.httpVersion,
//     })
//   );
// });

/**
 * Ending http2
 */

server.on('error', (err) => console.error(err));

server.on('stream', (stream, headers) => {
  stream.respond({
    'content-type': 'text/html; charset=utf-8',
    ':status': 200,
  });
  stream.end('<h1>Hello World</h1>');
});

/**
 * Ending Node.js
 */

/**
 * Using express
 */

// const server = express();

// server.use(express.urlencoded({ extended: false }));
// server.use(express.json());

// server.get('/', function (req, res, next) {
//   const { headers, url, method } = req;
//   log(headers, url, method);
//   res.send('Hello world');
// });

/**
 * Ending express code
 */

const PORT = 5000;

server.listen(PORT, () => {
  log(`Server listening on port ${PORT}`);
});
