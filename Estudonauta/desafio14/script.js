function condefato(ini,fi,pass){
        let resul = document.getElementById("resultado")
        resul.innerHTML = ''
        for (var c = ini; c <= fi; c+= pass){
        resul.innerHTML += `${c} ➜ `
        }
        resul.innerHTML += '🚩'
}


function contar(){
    let inicio = Number(document.getElementById("inicio").value)
    let fim = Number(document.getElementById("fim").value)
    let passo = Number(document.getElementById("passo").value)
    if (passo == 0){
        alert('Passo invalidado! Considerando Passo 1')
        passo = 1
        condefato(inicio,fim,passo)
    }
    else {
        condefato(inicio,fim,passo)
    }
} 