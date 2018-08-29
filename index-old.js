/**
 *  Configurando el Webserver con HTTP y express
 */

 const http = require('http');

 http.createServer((req,res) => {
   res.writeHead(200,{ 'Content-Type': 'application/json' })
   let salida= {
     nombre: 'Jose Alfredo',
     edad: 23,
     url: req.url,
     saludo: 'Hola Mundo'
   }
   res.write(JSON.stringify(salida));
   res.end()
 }).listen(3000)
 console.log('Escuchando en el puerto 3000');
