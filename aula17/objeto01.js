let amigo = {}

amigo = {nome:'jose', 
    idade:20, 
    sexo:'M', 
    peso:85.4, 
    engordar(p=0){ // existe como passar uma função dentro de um objeto
        this.peso += p

}}

amigo.engordar(10)
console.log(`${amigo.nome} pesa ${amigo.peso} Kg`)