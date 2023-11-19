let listafilme = []
let listatrailer = []
let botao = document.getElementById('botao')
botao.addEventListener('click', addFilme)
let filmeNatTela = document.getElementById('listaFilme')


function addFilme(){
    let filme = document.getElementById('imagemFilme').value
    let trailer = document.getElementById('trailer').value
    let erro = getElementById('mensagemErro')
    
    if (filme == ''){
        erro.innerHTML = 'Imagem invalida'
    }else{
        listafilme.push(filme)
        listatrailer.push(trailer)

        filmeadd()

        limpar()
    }
}


function filmeadd(){
    filmeNatTela.innerHTML = ''
    for (let i= 0; i<listafilme.length; i++){
        filmeNatTela.innerHTML += ` <a href="${listatrailer[i]}" target="_blank"><img src=" ${listafilme[i]} "></a>`
    } 
}

function limpar(){
    document.getElementById('imagemFilme').value = ''
    document.getElementById('trailer').value = ''
}

