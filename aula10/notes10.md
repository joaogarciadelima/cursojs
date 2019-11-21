# Eventos no DOM
    
    Exemplos:
    Click do mouse
    Mouse enter
    Mouse over

Pode ser feito do HTML para o javascript
    '''html
    <div id="area" onmouseclick="clicar()" onmouseenter="Entrar()" onmouseout="sair()"></div>

    '''
Ou do javascript para o HTML
    '''js
    area.addEventListener('click', clicar)
    area.addEventListener('mouseenter', entrar)
    area.addEventListener('mouseout', sair)
    '''