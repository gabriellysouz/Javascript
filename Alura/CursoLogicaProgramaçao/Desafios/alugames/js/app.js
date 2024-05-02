function alterarStatus(id){
    let liGame = document.getElementById(`game-${id}`)
    let botao = liGame.getElementsByClassName('dashboard__item__button')[0]  
    let imagem = liGame.getElementsByClassName('dashboard__item__img')[0]


    if (botao.classList.contains('dashboard__item__button--return')){

        botao.classList.remove('dashboard__item__button--return')
        imagem.classList.remove('dashboard__item__img--rented')
        botao.innerHTML = 'Alugar'

    } else  {
        botao.classList.add('dashboard__item__button--return')
        imagem.classList.add('dashboard__item__img--rented')
        botao.innerHTML = 'Devolver'
    }

}