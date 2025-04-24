const http = require("http");
const os = require('os');
const port = process.env.PORT || 3000;
const message = process.env.MESSAGE || "Hello World!";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(`${message} from ${os.hostname()}`);
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
