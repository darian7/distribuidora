const express = require ('express');
const http = require ('http');
const path = require ('path');

const app = express();

const port = process.env.PORT || 4200;

app.use(express.static(path.join(__dirname,'')));

app.get('/*',(req,res)=> res.sendFile(path.join(__dirname,'index.html')));

const server = http.createServer(app);

server.listen(port,()=> console.log('corriendo'));
