const fs = require('fs')
const data = require('./data.json')
exports.post =  (req,res)=>{
   
  
    

    const keys = Object.keys(req.body)

   for(key of keys ){
       if(req.body[key]==""){
           return res.send('Preencha todos os campos')
       }
   }
   
   req.body.data = Date.parse(req.body.data)
   req.body.creat = Date.now()
   req.body.id = Number(data.instrutores.length +1)
   req.body.url = req.body.Avatar_URL
   data.instrutores.push(req.body)
   
   fs.writeFile('data.json', JSON.stringify(data, null,2),(erro)=>{
        if(erro){
            return res.send('Temos um erro')
        }else{
            return res.redirect('instrutores')
           
        }
      
   })

  
    // return res.send(keys)
   
   
}