function carregar () {
    // body
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom Dia!
        img.src ='fotomanha.png'
        document.body.style.background = '#96bb74'
    } else if(hora >= 12 && hora <= 18){
        // Boa Tarde!
        img.src ='fototarde.png'
        document.body.style.background = '#cda4af'
    } else {
        // Boa Noite!
        img.src ='fotonoite.png'
        document.body.style.background = '#1e4d62'
    }
}

