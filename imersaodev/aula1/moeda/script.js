let moeda = document.getElementById('options')
let result = document.getElementById('resul')
let botao = document.getElementById('botao')


botao.addEventListener('click', conversor)

function conversor(){
    let quantReal = Number(document.getElementById('amount').value)
    let cotacao= 1
    if (moeda.value == "euro"){
        cotacao = 5.25
    }
    else if (moeda.value == 'dolar'){
        cotacao = 4.91
    }
    else if (moeda.value == 'libra'){
        cotacao = 6.04
    }
    let valor = quantReal*cotacao
    result.innerText = `R$${valor.toFixed(2)}`
}

