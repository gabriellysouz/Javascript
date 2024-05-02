



/*let contador = 0;

while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAdudio = `#som_${instrumento}`

    tecla.onclick = function () {
        tocarSom(idAdudio)
    }
    
    contador += 1
}  
*/
function tocarSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
};

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador< listaDeTeclas.length; contador++){
    
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAdudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocarSom(idAdudio);
    }
    tecla.onkeydown = function (event){
        if (event.keyCode === 13 || event.keyCode === 32 ){
            tecla.classList.add('ativa');
        }  
    }
    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
    }

}


