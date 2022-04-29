const http = require('http');

const server = http.createServer((req, res) => {
  try {
    // ICI MIDDLEWARE A EXECUTER AVANT DE TRAITER LA REQUETE.
    console.log(req.httpVersion, req.url, req.method);
    const t0 = performance.now();
    // FIN MIDDLEWARE
    if (req.url === '/') {
      res.writeHead(200, { 'content-type': 'text/html' });
      res.write('<h1>HOMEPAGE</h1>');
      sendResponse(res, t0);
    } else {
      res.writeHead(404, { 'content-type': 'text/html' });
      res.write('<h1>404 Not Found</h1>');
      sendResponse(res, t0);
    }
  } catch (err) {
    res.writeHead(500, { 'content-type': 'text/html' });
    res.write('<h1>500 Internal Server Error</h1>');
    sendResponse(res, t0);
  }
});

function sendResponse(res, start) {
  const t1 = performance.now();
  console.log('la requete a pris : ', t1 - start), ' milliseconds';
  res.end();
}

server.listen(3000);
console.log('Server écoute sur le port 3000');