
let resul = document.getElementById('resul')
let check = document.getElementById('botao')
botao.addEventListener('click', conversor)


function conversor(){
    let celsius = Number(document.getElementById('celsius').value)
    let medidaTemp = document.getElementById('options')

    if (medidaTemp.value == 'kelvin'){

        resul.innerHTML = `${somarKelvin(celsius)}º K`
    }
    else if(medidaTemp.value == 'fahrenheit') {
        resul.innerHTML = `${somarFahrenheit(celsius)}º F`
    }
}

function somarKelvin(c){

    return (c+273.15)
}

function somarFahrenheit(c){
    return ((c * 9/5) + 32)
}