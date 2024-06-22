let botaoOrdenarPreco = document.getElementById('btnOrdenarPorPreco')

botaoOrdenarPreco.addEventListener('click', ordenarPreco)

function ordenarPreco(){

    let precoOrdenado = livros.sort((a,b) => a.preco - b.preco)
    
    exibirLivrosNaTela(precoOrdenado)

}