var http=require('http');// importing some funcinality

var onRequest =(request,response)=>{
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.write('Hello world')
    response.end();    
}

http.createServer(onRequest).listen(8000);