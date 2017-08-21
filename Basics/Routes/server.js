var http=require('http');// importing some funcinality
var app=require('./app');


http.createServer(app.handleRequest).listen(8000);