const http = require('http');
const server = http.createServer();

server.listen(0, () => {
  const PORT = server.address().port;
  console.log(`Available port found: ${PORT}`);
  server.close();
});
