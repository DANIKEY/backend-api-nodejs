// imports
var express =  require('express');
var bodyParser = require('body-parser');
var apiRouter  = require('./apiRouter').router;
var cors = require('cors');

// Instanciate server
var server = express();

// Configure cors

server.use(cors());

// Body Parser configuration
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());


// Configure routes
server.get('/',function(req,res){
  res.setHeader('Content-Type','text/html');
  res.setHeader('Access-Control-Allow-Origin', '*');

  res.status(200).send('');
});

server.use('/api/',apiRouter);

// Launch server
server.listen(8080,function() {
    console.log('Server listening');
})