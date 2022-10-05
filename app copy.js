const http =  require("http"); // importacao 
const hostname =  "127.0.0.1";
const port = 3000;

//criando o servico
const server =  http.createServer(   (req,res) => {

    res.statusCode=200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("API Drink HT")

})

//ativar o servico 
server.listen (port, hostname, ()=>{
    console.log (`Servidor Local está rodando em http://${hostname}:${port}`)
})