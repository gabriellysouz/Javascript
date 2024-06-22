
function criarCard(titulo, descricao, codigo, corBorda, index){
    let cardPrincipal = document.querySelector('.cards__container-principal')
    
    cardPrincipal.innerHTML += `<div class="card__container">
        <div class="editor-codigo__container">
            <code style="border-color:${corBorda} ;" name="editor-codigo-comun" id="editor-codigo-comun"> ${codigo} </code>
        </div>
        <div class="detalhes__container">
            <div class="detalhes__container-titulo-descriçao">
                <div class="container-titulo">
                    <a href="index.html?editarProjeto=${index}">${titulo}</a>
                    <img class="icone-3circulos" src="img/ellipsis-vertical-solid.svg" alt="">
                </div>
                <p>${descricao}</p>
            </div>
            <div class="detalhes__container-curtida-perfil">
                <div class="detalhes__container-curtida">
                    <img src="img/Component.svg" alt="">
                    <img src="img/Component 12.svg" alt="">
                </div>
                <div class="detalhes__container-perfil">
                    <img src="img/foto-perfil.svg" alt="">
                    <p>@Harry</p>
                </div>
             </div>
        </div>
    </div>`

}




let arrayProjeto = JSON.parse(localStorage.listaProjetos)

if(arrayProjeto.length > 0){
    arrayProjeto.forEach((projeto, index) => {
        criarCard(projeto.titulo, projeto.descricao, projeto.codigo, projeto.corBorda, index)
    });

    let botaoDeletar = document.querySelectorAll('.icone-3circulos');
    botaoDeletar.forEach((botao, index) => {
        botao.setAttribute('data-index', index);
        botao.addEventListener('click', temCertezaDeletar);
    });
} else {
    let card = document.querySelector('.container_texto-crie-projeto')
    card.innerHTML = `<p class="texto-crie-projeto">Crie um projeto :D</p>`
}

function deletarProjeto(event) {
    let index = event.target.getAttribute('data-index');
    arrayProjeto.splice(index, 1);
    localStorage.listaProjetos = JSON.stringify(arrayProjeto)
    location.reload(); 
}


function temCertezaDeletar(event){
    Swal.fire({
        title: "Tem certeza?",
        text: "Você não conseguira desfazer essa decisão!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sim, pode excluir!"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Prontinho!",
                text: "Seu projeto foi excluido.",
                icon: "success"
            });
            setTimeout(function() {
                deletarProjeto(event);
            }, 2000);
        }
    });
}
