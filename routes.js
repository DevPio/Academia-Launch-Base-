const express = require('express')

const instrutores = require('./intrutores')

const routes = express.Router()



routes.get("/",(req, res)=>{
    return res.render('layout')
})

routes.get("/instrutores" ,(req, res)=>{
    return res.render('instrutores/index')
})


routes.get("/membros" ,(req, res)=>{
    return res.render('instrutores/membros')
})

routes.get("/creat" ,(req, res)=>{
    return res.render('creat')
})

routes.post("/instrutores",instrutores.post)
module.exports = routes