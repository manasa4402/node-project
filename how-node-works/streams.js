const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  // Solution 1:
  // fs.readFile('test-file.txt', (err, data) => {
  //     if(err) console.log(err);
  //     res.end(data);
  // })

  // solution 2

  const readable = fs.createReadStream("test-file.txt");

//   readable.on('data', (chunk) => {
//     res.write(chunk);
//   });
//   readable.on('end', () => {
//     res.end();
//   });

//   readable.on("error", (err) => {
//     res.statusCode = '500';
//     res.write(err);
//     res.end('File not found');
//   });

// solution 3
// readable.pipe(write able destination);
    readable.pipe(res);
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening...");
});
