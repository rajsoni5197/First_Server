// this project is a web api which will send a html file back to the 
// client if recieved right request else it will return a 404 error page.

const http = require('http'); //imported http core module as http .
const fs = require('fs');     // imported fs core module as fs.


//created a server using http module and stored it in this server var.
// this will listen to a specific port for a request and if recieved 
// will send responce accordingly.
const server = http.createServer((req, res) => {

  //if the rout is  not "/".means the request is comming from url like "ip:port/example". 
   if(req.url !== '/'){
    error404(res); //called function to send error page ;
    return;
  }
  //if the rout is '/'. and the request metohod is Get. 
    if (req.url == "/" && req.method == 'GET') {
      ok(res);   //called function to send right html page.
    }
 
}).listen(9999); //given a port to listen on . 

console.log('ok listening to port 9999')

//function to send error page.
function error404(response){
    console.log('error happened....');

    //write header with method 404 and content-type html.
    response.writeHead(404,{'content-type':"text/html"}); 
    
    //created a readStream for error file and piped it to response .
    fs.createReadStream('./serve/error404/index.html').pipe(response);
};

//function to send correct page.
function ok(response) {
   console.log('ok got it...');

   //write header with method 200 ok and content-type html.
   response.writeHead(200,{'content-type':"text/html"});

   //created a readStream for error file and piped it to response .
   fs.createReadStream('./serve/ok/user.html').pipe(response);

}