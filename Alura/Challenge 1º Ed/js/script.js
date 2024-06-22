
let projetosSalvo = []
let projeto = criaProjetoVazio()

let cores =  {
    azul : '#6BD1FF', 
    laranja : '#FFC46B', 
    verde : '#9AFF6B',
    rosa : '#FF6BCD' 
}

let select = document.querySelector('#personalizacao-cor')
let editorCodigo = document.querySelector('.editor-codigo')
let editorContainer = document.querySelector('.codigo-wrapper')
let botaoSalvar = document.querySelector('.botao-salvar-projeto')
let botaoHighlight = document.querySelector('.editor-codigo-botao')
let linguagem = document.querySelector('#personalizacao-linguagem')
let corSelecionada = cores.azul
let botaoSalvarAlteracao = document.querySelector('.botao-salvar-alteracao')

select.addEventListener('change', corBotao)
botaoSalvar.addEventListener('click', salvarProjeto)
botaoHighlight.addEventListener('click', adicionaHighlight)
botaoSalvarAlteracao.addEventListener('click', salvarAlteracao)

if(window.location.href == 'index.html'){
    trocarClasseBotaoSalvar()
}

function trocarClasseBotaoSalvar(){
    botaoSalvar.classList.remove('esconder')
    botaoSalvarAlteracao.classList.add('esconder')
}

function corBotao(){
    corSelecionada = cores[select.value]
    selecionaCor(corSelecionada)
}

    
function selecionaCor(cor){
    select.style.backgroundColor = cor
    select.style.color = cor
    editorCodigo.style.borderColor = cor
}   

function salvarProjeto(){
    let editorCodigo = document.querySelector('.editor-codigo')
    let nomeProjeto = document.querySelector('#nome-projeto')
    let descricaoProjeto = document.querySelector('#descricao-projeto')

    if(editorCodigo.textContent == '' || nomeProjeto.value == '' || descricaoProjeto.value == ''){
        alert('Preenche todos os campos para salvar')
    } else{
        projeto.titulo = nomeProjeto.value
        projeto.descricao = descricaoProjeto.value
        projeto.codigo = editorCodigo.textContent
        projeto.corBorda = corSelecionada

        adicionaNalocalStorage()
        
        projeto = criaProjetoVazio()

        feedbackOk()
        
        limpaCampo(nomeProjeto, descricaoProjeto, editorCodigo)

    }
}

function adicionaNalocalStorage(){
    if(localStorage.listaProjetos){
        projetosSalvo = JSON.parse(localStorage.getItem('listaProjetos'))
    }

    projetosSalvo.push(projeto)
    localStorage.listaProjetos = JSON.stringify(projetosSalvo)
}



function limpaCampo(titulo, descricao, codigo){
    titulo.value = ''
    descricao.value = ''
    codigo.textContent = ''
    select.selectedIndex = 0

    var event = new Event('change'); 
    select.dispatchEvent(event);
}

function criaProjetoVazio() {
    return {
        titulo : '',
        descricao: '',
        codigo: '',
        corBorda: ''
    }
}

function adicionaHighlight(){
    let codigo = editorContainer.innerText
    editorContainer.innerHTML = `<code id="editor-codigo" class="editor-codigo hljs ${linguagem.value}" contenteditable="true"></code>`
    editorContainer.querySelector('code').textContent = codigo

    editorCodigo = document.querySelector('.editor-codigo')

    hljs.highlightElement(editorContainer.querySelector('code'))
}


function pegaNumeroIndex(){
    return window.location.href.split('=')[1]
}

if(window.location.href.split('?')[1]!= undefined){
    let index = pegaNumeroIndex()
    let arrayProjeto = JSON.parse(localStorage.listaProjetos)
    let projeto = arrayProjeto[index]
    editarProjeto(projeto)

}

function editarProjeto(projeto){
    if(botaoSalvarAlteracao.classList.contains('esconder')){
        botaoSalvarAlteracao.classList.remove('esconder')
        botaoSalvar.classList.add('esconder')
    }
    let editorCodigo = document.querySelector('.editor-codigo')
    let nomeProjeto = document.querySelector('#nome-projeto')
    let descricaoProjeto = document.querySelector('#descricao-projeto')

    nomeProjeto.value = projeto.titulo
    descricaoProjeto.textContent = projeto.descricao
    editorCodigo.textContent = projeto.codigo
    selecionaCor(projeto.corBorda)

}

function salvarAlteracao(){
    let index = pegaNumeroIndex()
    let arrayProjeto = JSON.parse(localStorage.listaProjetos)
    let projeto = arrayProjeto[index]
    let editorCodigo = document.querySelector('.editor-codigo')
    let nomeProjeto = document.querySelector('#nome-projeto')
    let descricaoProjeto = document.querySelector('#descricao-projeto')

    projeto.titulo = nomeProjeto.value
    projeto.descricao = descricaoProjeto.value
    projeto.codigo = editorCodigo.textContent
    projeto.corBorda = corSelecionada
    
    localStorage.listaProjetos = JSON.stringify(arrayProjeto)

    feedbackOk()

    setTimeout(function() {
        window.location.href = 'index.html';
    }, 2000);

    trocarClasseBotaoSalvar()

}

function feedbackOk(){
    swal.fire(
        'Prontinho',
        'Salvo com sucesso',
        'success'
    )
}
