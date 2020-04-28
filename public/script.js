// Efeito botao
const pageO = location.pathname
const menuI = document.querySelectorAll('a')

menuI.forEach((item)=>{
   
    if(item.getAttribute('href')== pageO){
       
        item.classList.add('ativo')
    }
})

// validacao form


