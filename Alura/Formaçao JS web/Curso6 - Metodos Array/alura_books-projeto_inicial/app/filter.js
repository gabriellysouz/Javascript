
const botoes = document.querySelectorAll('.btn')

botoes.forEach(botao => botao.addEventListener('click', filtrarLivros))

function filtrarLivros(){

    const elementoBotao = document.getElementById(this.id)
    const categoriaBotao = elementoBotao.value
    let livrosFiltrados

    if(categoriaBotao == 'todos'){
        exibirLivrosNaTela(livros)

    } else if(categoriaBotao == 'disponivel'){
        
        livrosFiltrados = livros.filter(livro => livro.quantidade > 0) 
        const valorTotal = calcularValorTotal(livrosFiltrados)
        exibirLivrosNaTela(livrosFiltrados)
        exibirValorTotalTela(valorTotal)

    }
    else {
        livrosFiltrados =  livros.filter(livro => livro.categoria == categoriaBotao)

        exibirLivrosNaTela(livrosFiltrados)
    }
}
    

function exibirValorTotalTela(valor){
    valorTotalLivroDisponivel.innerHTML = `
    <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valor}</span></p>
    </div>
    `
}
