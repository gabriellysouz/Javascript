
let tabela = document.getElementById('tabela')
let botaoAdd = document.getElementById('botaoAdd')

let listaJogadores =[]


botaoAdd.addEventListener('click', addJogador)

function addJogador(){
    let nomeJogador = document.getElementById('nomejogador').value
    let mensagemErro = document.getElementById('mensagemErro')
    
    if(nomeJogador == ''){
        mensagemErro.innerHTML = 'Adicione um nome ao Jogador, por favor.'
    }else{ 
        listaJogadores.push({
            nome: nomeJogador,
            vitoria:0,
            empate:0,
            pontos:0 })

        exibirNaTela()

        limpaCampo()
    }

}

function exibirNaTela(){
    mensagemErro.innerHTML = ''
    tabela.innerHTML = ''
    listaJogadores.forEach((jogador, index) => {
        tabela.innerHTML += `
        <tr>
            <td>${jogador.nome}</td>
            <td>${jogador.vitoria}</td>
            <td>${jogador.empate}</td>
            <td>${jogador.pontos}</td>
            <td id="vitoria" class="acao" onclick="addVitoria(${index})">Vitoria</td>
            <td id="empate" class="acao" onclick="addEmpate(${index})">Empate</td>
            <td id="remover" class="acao" onclick="remover(${index})">Remover</td>
        </tr>`
        
    })  
}


function addVitoria(index){
    listaJogadores[index].vitoria ++
    listaJogadores[index].pontos = listaJogadores[index].pontos + 3
    exibirNaTela()
}

function addEmpate(index){
    listaJogadores[index].empate ++
    listaJogadores[index].pontos++
    exibirNaTela()
}

function remover(index){
    listaJogadores.splice(index,1)
    exibirNaTela()
}

function limpaCampo(){
    document.getElementById('nomejogador').value = ''
}

function fimDoJogo(){
    let resul = document.getElementById('resulranking')
    let campeao = listaJogadores[0].pontos
    for(i=0; i< listaJogadores.length; i++){
        if(listaJogadores[i].pontos > campeao){
            campeao = listaJogadores[i].nome
        }
    }
    resul.innerHTML = campeao
}

function resetarJogo(){
    listaJogadores = []
    exibirNaTela()

}

function limparPontos(){
    for(i=0; i< listaJogadores.length; i++){
        listaJogadores[i].vitoria = 0
        listaJogadores[i].empate = 0
        listaJogadores[i].pontos = 0
    }
    exibirNaTela()
}