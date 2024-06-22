

const menorValor = 1
const maiorValor = 100

const numeroScreto = gerarNumeroAleatorio(menorValor, maiorValor)

const elementoMenorValor = document.getElementById('menor-valor')
const elementoMaiorValor= document.getElementById('maior-valor')

function gerarNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}

elementoMenorValor.innerHTML = menorValor
elementoMaiorValor.innerHTML = maiorValor


console.log(numeroScreto)