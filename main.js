function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio'){
        elemento.play();
    }
        
    else {console.log('Elemento não encontrado ou seletor invalido')}

}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador=0; contador<listaDeTeclas.length; contador++) {

    const teclas = listaDeTeclas[contador];
    const instrumento = teclas.classList[1]
    const idAudio = `#som_${instrumento}`;
    
    teclas.onclick = function(){
        tocaSom(idAudio);
    };

    teclas.onkeydown = function(evento) {

        if (evento.code === 'Space' || evento.code === 'Enter'){
        teclas.classList.add('ativa');
        }
    }

    teclas.onkeyup = function(){
        teclas.classList.remove('ativa');
    }    
}
