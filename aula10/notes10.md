# Eventos no DOM
    
    Exemplos:
    Click do mouse
    Mouse enter
    Mouse over

Pode ser feito do HTML para o javascript
    
    <div id="area" onmouseclick="clicar()" onmouseenter="Entrar()" onmouseout="sair()"></div>

    
Ou do javascript para o HTML
    
    area.addEventListener('click', clicar)
    area.addEventListener('mouseenter', entrar)
    area.addEventListener('mouseout', sair)
   