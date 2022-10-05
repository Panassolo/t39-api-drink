//carragando o express na aplicacao
const express = require("express")
const cors = require("cors")
const app = express() // invocando a function do express

const port = 3000 // definindo uma porta para o serviço


let produtos =[]

produtos.push({ descricao:'Suco de Uva', 
                                preco:'5.5', 
                                imagem:'http://i.mlcdn.com.br/portaldalu/fotosconteudo/58836.jpg' })


produtos.push({ descricao:'Suco de Banana', 
                                preco:'5.5', 
                                imagem:'http://i.mlcdn.com.br/portaldalu/fotosconteudo/58836.jpg' })


produtos.push({ descricao:'Suco de Laranja', 
                                preco:'5.5', 
                                imagem:'http://i.mlcdn.com.br/portaldalu/fotosconteudo/58836.jpg' })



//conectando a funcao cors com o express
app.use(cors())
//reconhecendo os request que possui json no body
app.use(express.json())


// invocando a funcao get para configurar a rota http pelo método get
app.get("/", (req, res)=>{
    res.send("Boa noite!!!")

}) 
//Lista de produtos
app.get("/produtos", (req, res)=>{
   
    res.json(produtos)

}) 

//Lista de produtos
app.post("/produtos", (req, res)=>{
   
   //incluindo objeto no array
    produtos.push(req.body) 
    //devolvendo um json de resposta para o client 
    res.json({mensagem:"cadastrado com sucesso"}) 
}) 

app.listen(port, ()=>{
    console.log(`App running on port ${port}`)
} )



