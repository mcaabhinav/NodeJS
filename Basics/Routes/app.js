
var url =require('url');
var fs=require('fs');
let renderHtml=(path,response)=>{

    fs.readFile(path,null,function(error,data){
        if(error)
         {
              response.writeHead(404);
              response.write('File not found');
         }
         else
             {
                 response.write(data);
 
             }
             response.end();   
    }); 

};
module.exports={
    handleRequest:(request,response)=>{
        response.writeHead(200,{'Content-Type':'text/html'});
        let path=url.parse(request.url).pathname;
        switch(path)
        {
            case '/':
            renderHtml('./index.html',response);
            break;
            case '/index2':
            renderHtml('./index2.html',response);
            break;
            default:
            response.writeHead(404);
            response.write('Route not defined');
            response.end();   
        }
    }
}