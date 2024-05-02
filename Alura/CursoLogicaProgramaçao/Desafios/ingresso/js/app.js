/*let quantidadePista = 100;
let quantidadeSuperior = 200;
let quantidadeInferior = 400;*/

let quantidade = { quantidadePista : 100, quantidadeSuperior : 200,  quantidadeInferior: 400 };


function comprar(){
    let quantidadeComprar = document.getElementById('qtd').value
    let tipoBilhete = document.getElementById('tipo-ingresso').value 

    if (tipoBilhete == 'pista'){
        
        validarQuantidade(quantidadeComprar, "quantidadePista", 0, 'pista')

    } else if (tipoBilhete == 'superior'){

        validarQuantidade(quantidadeComprar, "quantidadeSuperior", 1, 'superior')
        
    } else if (tipoBilhete == 'inferior'){
        
        validarQuantidade(quantidadeComprar, "quantidadeInferior", 2, 'inferior')
    } 

}

/* metodo nao estava atualizando as variaveis quantidadePista/Superior/Inferior

function validarQuantidade(qtdcom, qtdtipo, index, tipo){
    let mostrarNaTela = document.querySelector('.lista').children;

    if (qtdcom <= qtdtipo){
        qtdtipo -= qtdcom
        mostrarNaTela[index].innerHTML = `<li>Cadeira ${tipo}<span id="qtd-${tipo}">${qtdtipo}</span></li>`
    } else {
        alert('Bilhete Indisponivel')
    }
}*/


//Seguestao do luquinhas - criar um objeto com as quantidades e acessar/modificar os valores dentro desse objeto 

function validarQuantidade(qtdcom, qtdtipo, index, tipo){
    let mostrarNaTela = document.querySelector('.lista').children;
    let tipoBilhete = document.getElementById('tipo-ingresso').value

    if (qtdcom <= quantidade[qtdtipo]){
        quantidade[qtdtipo] -= qtdcom
        
        if (tipoBilhete == 'pista'){
            mostrarNaTela[index].innerHTML = `<li>Pista <span id="qtd-${tipo}">${quantidade[qtdtipo]}</span></li>`

        } else {
             mostrarNaTela[index].innerHTML = `<li>Cadeira ${tipo}<span id="qtd-${tipo}">${quantidade[qtdtipo]}</span></li>`
        }
        
    } else {
        alert('Quantidade Indisponivel')
    }
}


/* Sugestao de Resolução Alura 

function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = document.getElementById('qtd').value;

    if (tipo.value == 'pista') {
        comprarPista(qtd);
    } else if (tipo.value == 'superior') {
        comprarSuperior(qtd);
    } else {
        comprarInferior(qtd);
    }
}

function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > qtdPista) {
        alert('Quantidade indisponível para tipo pista');
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso!');
    }
}

function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > qtdSuperior) {
        alert('Quantidade indisponível para tipo superior');
    } else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso!');
    }
}

function comprarInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > qtdInferior) {
        alert('Quantidade indisponível para tipo inferior');
    } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso!');
    }
}
*/