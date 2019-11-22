function verificar(){
    var date = new Date()
    var ano = date.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''

        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                // crianca
                img.setAttribute('src', 'menino.png')
            }else if(idade < 21){
                // jovem
                img.setAttribute('src', 'jovem.png')
            }else if(idade < 50){
                // aduldo
                img.setAttribute('src', 'homem.png')
            }else{
                // idoso
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                //menina
                img.setAttribute('src', 'menina.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'girl.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'mulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} e a idade calculada é: ${idade}`
        res.appendChild(img)
    }

}