// Função recursiva
function fatorial(n) {
    if(n ==1){
        return 1
    } else {
        return n * fatorial(n -1)
    }
}

console.log(fatorial(5))

/*
Se o numero é 1 tem que retornar 1
senão o número é ele * (ele mesmo -1)

n = n * (n - 1)

*/