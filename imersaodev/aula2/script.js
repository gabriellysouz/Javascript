let resul = document.getElementById('resul')
let botao = document.getElementById('botao')
let tentativaNaTela = document.getElementById('tenta')
let numeroAleatorio = parseInt(Math.random() * 101)
let tentativasDisponiveis = 10
let numeroChutes = 0

botao.addEventListener('click', palpite)

function palpite(){
    let chute = Number(document.getElementById('chute').value)
    if (chute < 0 || chute > 100 ){
        resul.innerHTML = `Entre 0 e 100, por favor`
    }
    else {
        if (tentativasDisponiveis != 0 ){
        tentativasDisponiveis -= 1
        numeroChutes +=1
        if (chute == numeroAleatorio){
            resul.innerHTML = `Parabens, acertou na ${numeroChutes}º tentativa`
            tentativaNaTela.style.display = 'none'
        }
        else if (chute < numeroAleatorio){
            resul.innerHTML = `Chute mais alto`
        }
        else if (chute > numeroAleatorio){
            resul.innerHTML = `Chute mais baixo`
        }
        }
        tentativaNaTela.innerHTML = `Voce ainda tem ${tentativasDisponiveis} tentativas`
  
    }
    if (tentativasDisponiveis == 0){
    resul.innerHTML= `Nao foi dessa vez, o numero escondido era ${numeroAleatorio}!`
    tentativaNaTela.style.display = 'none'
    }
}



        
   