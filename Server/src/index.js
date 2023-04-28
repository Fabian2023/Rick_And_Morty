const http = require('http')
const {getCharById} =require('./controllers/getCharById');



http
.createServer((req, res) =>{
    res.setHeader('Access-Control-Allow-Origin', '*'); // peticiones al frontend
   if(req.url.includes('/rickandmorty/character')){
     const id = req.url.split('/').at(-1);  // asi nos quedmos con el ultimo elemento de la url
     getCharById(res, +id)

   }
}) 
.listen(3004)


