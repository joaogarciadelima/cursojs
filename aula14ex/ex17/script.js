function tabuada(){
    var num = document.getElementById('num')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0){
        window.alert('Digite o numero')
    } else{
        let n = Number(num.value)
        let c= 1
        tab.innerHTML = ''
        while(c <= 10){
            let item = document.createElement('option') //criação em javascript
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` //Par saber qual item foi selecionado na tela
            tab.appendChild(item)
            c++
            
        }
    } 


}


