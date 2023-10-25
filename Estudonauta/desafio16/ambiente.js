let select = document.getElementById('resul')
let resultado = document.getElementById('resultado')
let lista = []

function add(){
    let num = Number(document.getElementById('num').value)
    
    if (num < 1 || num > 100){
        alert('Numero invalido ou ja se encontra na lista')
    }
    else {
        if (lista.indexOf(num) == 0){
            select.innerHTML= ' '
        }
        lista.push(num)
        let item = document.createElement("option")
        item.text += `O numero ${num} foi adicionado`
        item.value = num
        select.appendChild(item)
    }
}
 
function verif(){
    lista.sort()
    let soma = 0
    for (n in lista){
        soma += lista[n]
    }
    let media = soma/lista.length

    resultado.innerHTML += `Ao todo temos ${lista.length} numeros <br>`
    resultado.innerHTML += `<p>O menor numero é ${lista[0]}</p> `
    resultado.innerHTML += `<p>O maior numero é ${lista.at(-1)}</p>`
    resultado.innerHTML += `<p>A soma de todos os numeros é ${soma}</p>`
    resultado.innerHTML += `<p>A media dos numeros é ${media} </p>`
}
