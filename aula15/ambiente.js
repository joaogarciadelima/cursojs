let num = [0,6,8]

// imprimindo o indice 2 do vetor
console.log(num[2])

// imprimindo o vetor
console.log(num)

//acrescentar em uma posição específica
num[3] = 6

console.log(num)

//acrescentar no fim 
num.push(7)

console.log(num)

// tamanho do vetor
console.log(num.length)

// ordenar em ordem crescente
num.sort()

console.log(num)


//acessando a posição do vetor dinamicamente
for(let pos = 0; pos < num.length;pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}


// simplificando o for
for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}


// buscando valores

let posicao = num.indexOf(4)

if (posicao == -1){
    console.log('O valor não foi encontrado!')
}else{
    console.log(`O valor 7 está na ${posicao} `)
}