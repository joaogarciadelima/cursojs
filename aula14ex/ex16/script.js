function contar(){
    var passo = window.document.getElementById('txtpasso')
    var ini = window.document.getElementById('txtini')
    var fim = window.document.getElementById('txtfim')
    var res = window.document.getElementById('res')
    
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar'
        //window.alert('[ERRO] Faltam dados')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p == 0){
            alert('Valor inválido considerando 1')
            p = 1
        }

        if (i<f){
            for (let c = i; c<= f; c+=p){
                res.innerHTML += `${c} \u{1F600}`
            }
        }else{
            for (let c = i; c>=f; c-= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}