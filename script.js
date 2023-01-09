function carregar(){
    var msg = document.querySelector("#msg")
    var img = document.querySelector("#imagem")
    var data = new Date ()
    var hora = data.getHours()
    var nome = prompt('Digite seu nome.')   
    

    msg.innerHTML = `Agora são ${hora} horas`
    msg.innerHTML +=`  Sr ${nome}`
    if (hora >=0 && hora < 12){
        img.src = 'manha.jpg'
        msg.innerHTML +=`Bom dia!`
        document.body.style.background = '#d1d1d1'

    } else if (hora >12 &&  hora < 19){
        img.src ='250Ptarde.jpg' 
        msg.innerHTML +=` Boa tarde!`
        document.body.style.background = '#ffa902'
    
    } else {
        img.src = 'nooite.jpg'
        msg.innerHTML +=` Boa noite!`
        document.body.style.background = '#081a1c'
    }
}