function condefato(ini,fi,pass){
        let resul = document.getElementById("resultado")
        resul.innerHTML = ''
        for (let c = ini; c <= fi; c+= pass){
        resul.innerHTML += `${c} ➜ `
        }
        resul.innerHTML += '🚩'
}

function contanegativa(ini,fi,pass){
    let resul = document.getElementById("resultado")
    resul.innerHTML=''
    for (let c = ini; c >= fi; c -= pass ){
        resul.innerHTML += `${c} ➜ `
    }
     resul.innerHTML += '🚩'
}

function contar(){
    let resul = document.getElementById("resultado")
    let inicio = Number(document.getElementById("inicio").value)
    let fim = Number(document.getElementById("fim").value)
    let passo = Number(document.getElementById("passo").value)
    if (inicio == '' || fim == '' || passo == ''){
        alert('Informe um valor para cada campo, por favor.')
        resul.innerHTML = 'Impossivel contar!'
    }
    else{
        if (inicio < fim){
            condefato(inicio,fim,passo)
        }
        else{
            contanegativa(inicio, fim, passo)
        }
    }
}
    
        