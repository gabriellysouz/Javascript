let acertou = false

function verificaSeOChuteValido(chute){

    const numero = parseInt(chute)
    

    if (seChuteInvalido(numero)){
        elementoChute.innerHTML += `<div>Valor invalido</div>`
        return
    }

    if (numeroMaiorOuMenor(numero)){
         elementoChute.innerHTML += `<div>Valor invalido - o numero esta entre ${menorValor} e ${maiorValor}</div>`
         return
    }

    if (numero === numeroScreto){
        acertou = true
        document.body.innerHTML = `<h2>VOCE ACERTOOU!!</h2>
        <h3>O numero secreto era ${numero}</h3>
        `
    }
    else{
        dicaMaiorOuMenor(numero)
    }


}



function seChuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenor(numero){
    return numero > maiorValor || numero < menorValor
}


