var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()
console.log(`Agora sao exatamente ${hora}:${min} min.`)
if (hora > 5 && hora < 12) {
    console.log('Bom Dia!')
}
else if (hora >= 12 && hora <= 18) {
    console.log('Boa Tarde!')
}
else if (hora > 19 && hora <= 23) {
    console.log('Boa Noite!')
}
else {
    console.log('Boa Madrugada!')
}

