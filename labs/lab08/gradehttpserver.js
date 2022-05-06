const http = require('http');  
const url = require('url');
const server = http.createServer(function(request, response) {  
    const params = url.parse(request.url, true).query.grade
    let grade = []
    if (params <= 100 && params >= 85){ grade.push('A') }
    if (params <=85 && params >= 73){ grade.push('B') }
    if (params <=72 && params >= 67){ grade.push('C+') }
    if (params <=66 && params >= 60){ grade.push('C') }
    if (params <=59 && params >= 51){ grade.push('C-') }
    if (params <=50 && params >= 0){ grade.push('F') }
    response.writeHead(200, {'Content-Type': 'text/html'});  
    response.write(`<!DOCTYPE html><html>  
    <head><title>Grade Converter</title> </head>  
    <body>  
    <h1>Grader Converter</h1> 
    <h4>Your score: ${params} </h4>
    <h4>Your grade: ${grade} </h4>
    </body></html>`);  
    response.end();  
});  
  
server.listen(4000);  
console.log("Server is listening on port 4000");


