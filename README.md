# Node Config

## http2 coding

Reference:
<https://stackoverflow.com/questions/58818303/how-to-implement-and-use-http-2-in-node-js>

<https://nodejs.org/api/http2.html#http2_server_side_example>

<https://stackoverflow.com/questions/55828540/simple-http2-nodejs-server-from-official-docs-postman-not-working>

<https://stackoverflow.com/questions/47460500/node-js-http2-server-error-socket-hang-up>

<https://engineering.circle.com/https-authorized-certs-with-node-js-315e548354a2>

create cert.pem and privkey.pem command

```bash/shell
 openssl req -x509 -newkey rsa:2048 -nodes -sha256 -subj '/CN=localhost' \
  -keyout localhost-privkey.pem -out localhost-cert.pem
```
