const elementoParaInserirLivros = document.getElementById('livros')
const valorTotalLivroDisponivel = document.getElementById('livros__disponiveis')

function exibirLivrosNaTela(listaLivros){
    
    elementoParaInserirLivros.innerHTML = ''
    valorTotalLivroDisponivel.innerHTML = ''
    
    listaLivros.forEach(livros => { 

        let disponibilidade = verificarDisponibilidade(livros)
        elementoParaInserirLivros.innerHTML += `
            <div class="livro">
                <img class="${disponibilidade}" src="${livros.imagem}" alt="${livros.alt}" />
                <h2 class="livro__titulo"> ${livros.titulo} </h2>
                <p class="livro__descricao">${livros.autor}</p>
                <p class="livro__preco" id="preco">R$${livros.preco.toFixed(2)}</p>
                <div class="tags">
                    <span class="tag">${livros.categoria}</span>
                </div>
            </div>
        `
    });
}

function verificarDisponibilidade(livro){
    if(livro.quantidade > 0){
        return 'livro__imagens'
    } else {
        return 'livro__imagens indisponivel'
    }
}