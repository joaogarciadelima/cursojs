let num = document.getElementById('txtnum')
let tab = document.querySelector('select#seltab')
let res = document.querySelector('div#res')
let valores = []

function isNumero(num){
    if (Number(num)>=1 && Number(num)<= 100) {
        return true
    } else {
        return false
    }

}

function inLista(num, lista){
    if (lista.indexOf(Number(num)) != -1) {
        return true
    } else {
        return false
    }

}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option') //criação em javascript
        item.text = `Valor ${num.value} adicionado.`
        tab.appendChild(item)
        res.innerHTML = ''
    }else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione os valores antes de finalizar')
    } else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos < menor])
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.<p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }

}
