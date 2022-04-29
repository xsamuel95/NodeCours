const fs = require('fs');

fs.readFile(`${__dirname}/log.txt`, 'utf8', function (err, data) {
  const content = data;
  console.log(content);
});

fs.readFile(`${__dirname}/../assets/index.html`, 'utf8', function (err, data) {
  const content = data;
  console.log(content);
});