const http = require('http');

const server = http.createServer((req, res) => {
// ICI MIDDLEWARE A EXECUTER AVANT DE TRAITER LA REQUETE.
  let start = performance.now();
  try {
    console.log(req.httpVersion, req.url, req.method);
    // FIN MIDDLEWARE
    if (req.url === "/") {
      res.writeHead(200, {'content-type':'text/html'});
      res.write('<h1>HOMEPAGE</h1>');
    } else {
      res.writeHead(404, {'content-type':'text/html'});
      res.write('<h1>404 Not Found</h1>');
    }
  } catch (err) {
    res.writeHead(500, {'content-type':'text/html'});
    res.write('<h1>500 Internal Server Error</h1>');
  }
  // ICI MIDDLEWARE A EXECUTER AVANT D'ENVOYER LA REPONSE
  //
  res.end()
  // ICI MIDDLEWARE A EXECUTER APRES AVOIR ENVOYER LA REPONSE
  let end = performance.now();
  console.log("requête a pris", end - start);
}

server.listen(3000);
console.log('Server écoute sur le port 3000');