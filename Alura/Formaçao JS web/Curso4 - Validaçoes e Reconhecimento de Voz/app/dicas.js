

function dicaMaiorOuMenor(numero){

    if (numero < numeroScreto){
        elementoChute.innerHTML += `<div>O numero secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`
    }
    else{
        elementoChute.innerHTML += `<div>O numero secreto é menor <i class="fa-solid fa-arrow-down"></i></div>`
    }

}