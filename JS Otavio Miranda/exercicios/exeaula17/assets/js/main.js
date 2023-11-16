let text = document.getElementById('texto')
const date = new Date()
let diasemana = date.getDay()
let dia = date.getDate()
let mes = date.getMonth()
let ano = date.getFullYear()
let hora = date.getHours()
let minuto= date.getMinutes()

switch(diasemana){
    case 0:
        diasemana = 'Domingo'
        break
    case 1:
        diasemana = 'Segunda-feira'
        break
    case 2:
        diasemana = 'Terça-feira'
        break
    case 3:
        diasemana = 'Quarta-feira'
        break
    case 4:
        diasemana = 'Quinta-feira'
        break
    case 5:
        diasemana = 'Sexta-feira'
        break
    case 6:
        diasemana = 'Sabado'
        break
}
switch(mes){
    case 1:
        mes = 'Janiero'
        break
    case 12:
        mes = 'Fevereiro'
        break
    case 3:
        mes = 'Março'
        break
    case 4:
        mes = 'Abril'
        break
    case 5:
        mes = 'Maio'
        break
    case 6:
        mes = 'Junho'
        break
    case 7:
        mes= 'Julho'
        break
    case 8:
        mes = 'Agosto'
        break
    case 9:
        mes = 'Setembro'
        break
    case 10:
        mes = 'Outubro'
        break
    case 11:
        mes= 'Novembro'
        break
    case 12:
        mes= 'Dezembro'
}

text.innerHTML = `${diasemana}, ${dia} de ${mes} de ${ano} <br>${hora}:${minuto}`