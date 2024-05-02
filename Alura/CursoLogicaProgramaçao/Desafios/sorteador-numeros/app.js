
function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value); 
    let deNumero = parseInt(document.getElementById('de').value);
    let ateNumero = parseInt(document.getElementById('ate').value);
    let resultado = document.getElementById('resultado');

    if ( ateNumero > deNumero && ateNumero - deNumero + 1 >= quantidade){
        let sorteados = [];
        let numero;

        for (let i = 0; i< quantidade; i++){
            numero = obterNumeroAleatorio(deNumero, ateNumero);

            while(sorteados.includes(numero)){
                numero = obterNumeroAleatorio(deNumero, ateNumero);
            }

            sorteados.push(numero);
        }
        
        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`;

        alterarStatusBotao()
    } else {
        resultado.innerHTML = `<label class="texto__paragrafo">Por favor indique valores validos </label>`;
    }

}

function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao(){
   let botao = document.getElementById('btn-reiniciar');
   
   if (botao.classList.contains('container__botao-desabilitado')) {
    
    botao.classList.remove('container__botao-desabilitado')
    botao.classList.add('container__botao')

   } else {

    botao.classList.remove('container__botao')
    botao.classList.add('container__botao-desabilitado')
    
   }
}

function reiniciar(){

    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();

}