var agora = new Date()
var hora = 8
var minuto = agora.getMinutes()
var hrescr = document.getElementById('horaescrita')
var img = document.getElementById('imagem')
var corpo = document.getElementById('body')
hrescr.innerHTML = `<p>Agora são ${hora}:${minuto}.</p>`
if (hora > 5 && hora < 12){
    corpo.style.background = 'rgb(206, 177, 105)'

}
else if (hora > 12 && hora < 18){
    corpo.style.background = 'rgb(184, 125, 80)'
}
else if(hora > 19 && hora < 23){
    corpo.style.background = 'rgb(40, 40, 40)'
}
else {
    corpo.style.background = 'rgb(29, 29, 26)'
}