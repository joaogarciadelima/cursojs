# Repetições

    Sequências

function comerPizza(){
    while(temFatia()){
        comerFatia()
    }

}

# While

    Estrutura de repetição com teste lógico

    enquanto o teste for válido o programa é executado

    var contador = 1
    while(contador <= 6){
        console.log(`Passo ${contador}`)
        contador ++
    }

# do

    Executa um bloco enquanto o teste for verdade
    var c = 1
    do {
        console.log(`Passo ${c}`)
        c ++
    }while(c<=6)