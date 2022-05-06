const http = require('http');  
const url = require('url');

  
const server = http.createServer(function(request, response) {  
    const params = url.parse(request.url, true)
    const ftemp = params.path.slice(params.path.indexOf('=')+1)
    const ctemp = ((parseInt(ftemp)-32)*5/9)
    console.log(ctemp)
    response.writeHead(200, {'Content-Type': 'text/html'});  
    response.write(`<!DOCTYPE html>  
    <html>  
    <head>  
    <title>My first web server</title>  
    </head>  
    <body>  
    <h1>Hello World!</h1>  
    </body>  
    </html>`);  
    response.end();  
});  
  
server.listen(4000);  
console.log("Server is listening on port 4000");


