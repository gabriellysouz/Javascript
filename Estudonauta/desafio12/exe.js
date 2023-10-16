var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()
var hrescr = document.getElementById('horaescrita')
var img = document.getElementById('imagem')
hrescr.innerHTML = `<p>Agora são ${hora}:${minuto}.</p>`

function inseririmagem(url) {
    var img = document.createElement('img')
    img.src = url
    img.style.width= "300px"
    img.style.height= "300px"
    img.style.borderRadius = "200px"
    document.getElementById('imagem').appendChild(img)
}

if (hora >= 5 && hora < 12){
    document.body.style.background = 'rgb(206, 177, 105)'
    inseririmagem("imagens/manha.jpg")

}
else if (hora >= 12 && hora < 18){
    document.body.style.background = 'rgb(184, 125, 80)'
    inseririmagem("imagens/tarde.jpg")
}
else if(hora >= 18 && hora <= 23){
    document.body.style.background = 'rgb(40, 40, 40)'
    inseririmagem("imagens/noite.jpg")
}
else {
    document.body.style.background = 'rgb(29, 29, 26)'
    inseririmagem("imagens/madrugada.jpg")
}