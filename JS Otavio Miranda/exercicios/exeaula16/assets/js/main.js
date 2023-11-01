


function calcula(){
    let peso = Number(document.getElementById('peso').value)
    let altura = Number(document.getElementById('altura').value)
    let resul = document.getElementById('resultado')

    let imc = peso / (altura*altura)
    resul.innerHTML = ' '
    if (imc < 18.5){
        resul.innerHTML = ` Seu IMC é ${imc.toFixed(2)} (Abaixo do peso)`
        resul.style.backgroundColor = 'red'
    }else if (imc >= 18.5 && imc < 24.9){
        resul.innerHTML = ` Seu IMC é ${imc.toFixed(2)} (Peso normal)`
        resul.style.backgroundColor = 'rgb(39, 123, 39)'
    }else if (imc >= 24.9 && imc <= 29.9){
        resul.innerHTML = ` Seu IMC é ${imc.toFixed(2)} (Sobrepeso)`
        resul.style.backgroundColor = 'rgb(189, 201, 79)'
    }else if (imc >= 30 && imc <= 34.9) {
        resul.innerHTML = ` Seu IMC é ${imc.toFixed(2)} (Obesidade grau 1)`
        resul.style.backgroundColor = 'rgb(186, 48, 48)'
    }else if (imc >= 35 && imc <= 39.9){
        resul.innerHTML = ` Seu IMC é ${imc.toFixed(2)} (Obesidade grau 2)`
        resul.style.backgroundColor = 'rgb(186, 48, 48)'
    }else{
        resul.innerHTML = ` Seu IMC é ${imc.toFixed(2)} (Obesidade grau 3)`
        resul.style.backgroundColor = 'red'
    }
}