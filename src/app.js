const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    const chunks = [];

    req.on('data', chunk => {
      const buf = Buffer.from(chunk);
      const str = buf.toString();
      chunks.push(str);
      const obj = JSON.parse(chunks)
      const value = obj.num1;

      // Write the code here to check if the number is odd or even
      if (value.num1 == undefined) {
        res.writeHead(400, { 'Content- Type': 'text / plain' });
        res.end("Bad request")
      }
      else if (value.num1 % 2 == 0) {
        res.writeHead(200, { 'Content- Type': 'text / plain' });
        res.end("The number is even");
      }
      else {
        res.writeHead(404, { 'Content- Type': 'text / plain' });
        res.end("The number is odd");
      }
    });
  }


});


module.exports = server;
