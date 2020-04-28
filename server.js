// chamando o express

const express = require('express')
const server = express()

// chamando o nunjucks
const routes = require("./routes")

const nunjucks = require('nunjucks')
server.use(express.urlencoded({extended:true}))
// executando o servidor
server.use(routes)
//arquivos estaticos
server.use(express.static("public"))
server.use(express.static("imagens"))

// motor de template que vamos trabalhar
server.set("view engine", "njk")


//configuração do nunjucks das pagina onde estão os arquivos recebidos
nunjucks.configure("views",{
    express:server,
    autoescape:false,
    noCache:true
})

//criando as rotas


server.listen(8080,()=>{
    console.log("servidor esta funcionando")
})



