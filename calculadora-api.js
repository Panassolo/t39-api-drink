const express = require("express")

const app = express() // invocando a function do express

const port = 3000 // definindo uma porta para o serviço

app.use(express.json()) //reconhecendo os request que possui json no body

app.post("/calcular", (req, res)=>{
    //Ler dados do request
   let n1 = req.body.n1
   let n2 = req.body.n2
    //soma
   let s = n1+n2
   //construcao de um objeto  de saida
   let saida =  {soma:s }
   //conversao do objeto de saida em json
   res.json(saida)
})

app.listen(port, ()=>{
    console.log(`App running on port ${port}`)
} )
