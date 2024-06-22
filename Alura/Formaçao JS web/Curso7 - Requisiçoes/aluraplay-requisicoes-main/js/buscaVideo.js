import { conectaAPI } from "./conectaAPI.js";
import constroiCard from "./mostrarVideos.js";

async function buscarVideo(evento){
    evento.preventDefault()
    const dadosDePesquisa = document.querySelector('[data-pesquisa]').value
    const busca = await conectaAPI.buscaVideo(dadosDePesquisa)

    console.log(busca)
    
    const lista = document.querySelector('[data-lista]')

    lista.innerHTML = ''

    busca.forEach(elemento => lista.appendChild(constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)))

    if(busca.length == 0){
        lista.innerHTML = `<h2 class= "mensagem__titulo">Não existem videos com esse termo</h2>`
    }
}

const botaoDePesquisa = document.querySelector('[data-botao-pesquisa]')

botaoDePesquisa.addEventListener('click', evento => buscarVideo(evento))