// const { createServer } = require('node:http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// import { builtinModules } from 'node:module';

// console.log(builtinModules);

function add(...numbers) {
  let sum = 0;

  for (let n of numbers) {
    sum += n;
  }

  return sum;
}

console.log(add(1, 2, 3, 10));