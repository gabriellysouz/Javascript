let listaAmigos = [];

function adicionar(){
    let amigo = document.getElementById('nome-amigo').value
    let amigosIncluidosNaTela = document.getElementById('lista-amigos')

    if(amigo == ''){
        alert('Informe um nome valido')
    } else {
        if (listaAmigos.length == 0){
            amigosIncluidosNaTela.innerHTML += `${amigo}`
        } else {
            amigosIncluidosNaTela.innerHTML += `, ${amigo}`
        }

        listaAmigos.push(amigo)
        document.getElementById('nome-amigo').value = ''
    }
}

function sortear(){ 
    let lista = listaAmigos.length
    let pessoa1
    let pessoa2
    let loopInfinito
    let sorteioFinal
    let sorteioNaTela = document.getElementById('lista-sorteio')

    do {
        loopInfinito = false
        let paraSorteio = [...listaAmigos]
        sorteioFinal = []
        
        for (let i=0; i < lista; i++){

            let index = obterNumeroAleatorio(0, paraSorteio.length - 1)
            let pessoaSorteada = paraSorteio[index]
    
            if (listaAmigos[i] == pessoaSorteada && paraSorteio.length == 1) {
                loopInfinito = true;
                break;
            }
    
            while (listaAmigos[i] == pessoaSorteada  ){
                index = obterNumeroAleatorio(0, paraSorteio.length - 1)
                pessoaSorteada = paraSorteio[index]
            }
            
            pessoa1 = listaAmigos[i]
            pessoa2 = pessoaSorteada
    
            paraSorteio.splice(index,1)
    
            sorteioFinal.push(`${pessoa1} -> ${pessoa2}`);
            
        }
    } while(loopInfinito)

    for (let i = 0; i < sorteioFinal.length; i++){
        sorteioNaTela.innerHTML += `<p id="lista-sorteio">${sorteioFinal[i]}</p>`
    }
}



//solução do luquinhas 
function sortear2(){ 
    let sorteioFinal = []
    let totalAmigos = listaAmigos.length
    let ultimoSorteado

    for (let i = 0; i < totalAmigos; i++) {
        let index = obterNumeroAleatorio(0, listaAmigos.length - 1)


        let sorteado = ultimoSorteado ? `${ultimoSorteado} => ${listaAmigos[index]}` : listaAmigos[index];
        sorteioFinal.push(sorteado);

        if (i == totalAmigos - 1) {
            sorteioFinal[0] = `${listaAmigos[index]} => ${sorteioFinal[0]}`
        }

        ultimoSorteado = listaAmigos[index]

        listaAmigos.splice(index, 1)
    }

    console.log(sorteioFinal)

}



function reiniciar(){
    listaAmigos = []
    document.getElementById('lista-amigos').innerHTML = ''
    document.getElementById('lista-sorteio').innerHTML = ''
}


function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

