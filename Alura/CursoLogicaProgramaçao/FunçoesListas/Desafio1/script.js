let titulo = document.querySelector('h1')
titulo.innerHTML = 'Hora do Desafio'

function verificarClicou(){
    console.log('Botao foi clicado')
}

function alerta(){
    alert('Eu amo JS')
}

function cidadeBrasil(){
    let cidade = prompt('Indique uma cidade')
    alert(`Estive em ${cidade} e lembrei de voce`)
}

function soma(){
    let n1 = Number(prompt('Digite o 1º numero: '))
    let n2 = Number(prompt('Digite o 2º numero: '))

    alert(`O resultado de ${n1} + ${n2} é igual a ${n1+n2}`)
}