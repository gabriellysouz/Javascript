let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []


function isNumero(n){
    if (Number(n) >= 1 && Number(n <= 100)){
        return true
    }else{
        return false
    }
}

function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else {
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    }
    else{
        alert('Numero invalido')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if (valores.length == 0){
        alert('Adicione valores')
    }
    else{
        let tot = valores.length
        let maior = valores [0]
        let menor = valores [0]
        let soma = 0
        

        for (pos in valores){
            soma += valores[pos]
            if ( valores[pos] > maior){
                maior = valores[pos]
            }
            if (valores[pos] < menor){
                menor = valores[pos]
            }
        }
        let media = soma / tot
        
        res.innerHTML = ' '
        res.innerHTML += `<p>Ao todo temos ${tot} cadastrados </p>`
        res.innerHTML += `<p>O maior numero cadastrado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor numero cadastrado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
        res.innerHTML += `<p>A media dos valores digitados é ${media}.</p>`

    }
}
