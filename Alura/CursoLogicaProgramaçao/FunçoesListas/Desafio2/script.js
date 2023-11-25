
function olaMundo(){
    console.log('Ola mundo!')
}

olaMundo()

function olaNome(nome){
    console.log(`Ola ${nome}!`)
}

olaNome('Ana')

function numDobro(num){
    return num * 2
}

function dobro(){
    let n1 = Number(prompt('Digite um numero: '))
    alert(`O dobro de ${n1} é ${numDobro(n1)}`)
}

function media(){
    let n1 = Number(prompt('Digite o 1º numero: '))
    let n2 = Number(prompt('Digite o 2º numero: '))
    let n3 = Number(prompt('Digite o 3º numero: '))
    alert(`A media dos 3 numeros é ${calculaMedia(n1,n2,n3).toFixed(1)}`)
}

function calculaMedia(n1, n2, n3){
    return (n1 + n2 + n3)/3
}

function maior(){
    let n1 = Number(prompt('Digite o 1º numero: '))
    let n2 = Number(prompt('Digite o 2º numero: '))
    alert(`O maior numero entre ${n1} e ${n2} é ${verMaior(n1,n2)}`)
}

function verMaior(n1,n2){
    let maior = n1
    if (n2 > n1){
        maior = n2
    }
    return maior
}


function multi(){
    let n1 = Number(prompt('Digite um numero: '))
    alert(`${n1} x ${n1} = ${multiPorEle(n1)}`)
}

function multiPorEle(n1){
    return n1 * n1
}