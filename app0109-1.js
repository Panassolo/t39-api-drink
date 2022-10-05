const http =  require("http"); // importacao 
const hostname =  "127.0.0.1";
const port = 3000;

//criando o servico
const server =  http.createServer(   (req,res) => {

    res.statusCode=200;
    res.setHeader('Content-Type', 'application/json');

    if  (req.method=="POST"){
        res.end("cadastrado com sucesso!")
    }

    if  (req.method=="PUT"){
        res.end("alterado com sucesso!")
    }
   
    if  (req.method=="DELETE"){
        res.end("deletado com sucesso!")
    }
    if (req.method==="GET"){
        let produtos = []

        let p1 = { descricao:'Suco de Uva', 
            preco:'10.5', 
            imagem:'http://i.mlcdn.com.br/portaldalu/fotosconteudo/58836.jpg' }

        let p2 = { descricao:'Suco de Banana', 
            preco:'11.5', 
            imagem:'http://i.mlcdn.com.br/portaldalu/fotosconteudo/58836.jpg' }

        let p3 = { descricao:'Suco de Laranja', 
            preco:'12.5', 
            imagem:'http://i.mlcdn.com.br/portaldalu/fotosconteudo/58836.jpg' }
            
        //1) carga no array com 3 produtos
        produtos.push(p1)
        produtos.push(p2)
        produtos.push(p3)


        res.end(JSON.stringify(produtos))
    }

})

//ativar o servico 
server.listen (port, hostname, ()=>{
    console.log (`Servidor Local está rodando em http://${hostname}:${port}`)
})