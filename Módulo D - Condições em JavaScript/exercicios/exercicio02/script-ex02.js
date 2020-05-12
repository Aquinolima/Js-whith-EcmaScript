function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO]Verifique os Dados novamente!')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var gênero = ''

       var img = document.createElement('img')      //cria uma tag imagem pelo js
       img.setAttribute('id', 'foto')               // atribui uma id para a imagem, mesma coisa que  <img id='foto> no html

       if (fsex[0].checked){
          gênero = 'Homem' 
          
                if(idade >= 0 && idade < 4){
                    //Bebê
                    img.setAttribute('src', 'foto-bebê-m.png')
                } else if (idade < 10){
                    //Criança
                    img.setAttribute('src', 'foto-criança-m.png')
                } else if (idade < 15){
                    //Adolescente
                    img.setAttribute('src', 'foto-adolescente-m.png')
                } else if (idade < 25){
                    //Jovem
                    img.setAttribute('src', 'foto-jovem-m.png')
                } else if(idade < 65){
                    //Adulto
                    img.setAttribute('src', 'foto-adulto-m.png')
                } else {
                    //Idoso
                    img.setAttribute('src', 'foto-idoso-m.png')
                }

       } else if (fsex[1].checked){
           gênero = 'Mulher'

           if(idade >= 0 && idade < 4){
            //Bebê
            img.setAttribute('src', 'foto-bebê-f.png')
        } else if (idade < 10){
            //Criança
            img.setAttribute('src', 'foto-criança-f.png')
        } else if (idade < 15){
            //Adolescente
            img.setAttribute('src', 'foto-adolescente-f.png')
        } else if (idade < 25){
            //Jovem
            img.setAttribute('src', 'foto-jovem-f.png')
        } else if(idade < 65){
            //Adulto
            img.setAttribute('src', 'foto-adulto-f.png')
        } else {
            //Idoso
            img.setAttribute('src', 'foto-idoso-f.png')
        }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
       res.appendChild(img)
    }
}