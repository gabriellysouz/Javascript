
let total=0;

function adicionar(){
    let select = document.getElementById('produto');
    let produto = select.children[select.selectedIndex].textContent;
    let produtoSplitado = produto.split('-');
    let valorProduto = Number(produto.split('$')[1]);
    let campoTotal = document.querySelector('.carrinho__total');
    let aparecerNaTela = document.querySelector('.carrinho__produtos__produto');
    let quantidade = document.getElementById('quantidade');
    
    if(quantidade.value == ''){
        quantidade.value = 1;
    }
    
    total = (valorProduto * quantidade.value) + total;

    aparecerNaTela.innerHTML += `<span class="texto-azul">${quantidade.value}x</span> ${produtoSplitado[0]} <span class="texto-azul">${produtoSplitado[1]}</span><br>`;

    campoTotal.innerHTML = `Total: <span class="texto-azul" id="valor-total">R$${total}</span>`;

    quantidade.value = ''
}



function limpar(){
    let campoTotal = document.querySelector('.carrinho__total');
    let aparecerNaTela = document.querySelector('.carrinho__produtos__produto');

    campoTotal.innerHTML = 'Total: <span class="texto-azul" id="valor-total">R$0</span>';

    aparecerNaTela.innerHTML = `<span class="texto-azul"></span><span class="texto-azul"></span><br>`;

    total = 0;
}
