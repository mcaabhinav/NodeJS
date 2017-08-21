var http=require('http');// importing some funcinality
var module=require('./module2');// importing some funcinality
var module2=require('./module2');// importing some funcinality

var onRequest =(request,response)=>{
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.write(module.myString);
    module.myFunction('this Module 1');
    response.write(module2.myString);
    module2.myFunction('this Module 2');
    response.end();    
}

//http.createServer(onRequest).listen(8000);
//other way Anonymus

http.createServer((request,response)=>{
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.write(module.myString);
    module.myFunction('this Module 1');
    response.write(module2.myString);
    module2.myFunction('this Module 2');
    response.end();    
}).listen(8000);