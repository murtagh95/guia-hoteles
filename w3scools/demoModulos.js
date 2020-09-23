let http = require('http');
// Incluimos el modulo propio
let dt = require('./miPrimerModulo'); 


http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write("El dia y hora actual es: " + dt.myDateTime());
    res.end();
}).listen(8080);
