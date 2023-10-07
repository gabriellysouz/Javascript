function inseririmagem(url){
    var imge = document.createElement("img")
    imge.src = url
    imge.style.width= "300px"
    imge.style.height= "300px"
    imge.style.borderRadius = "200px"
    var imagem = document.getElementById("img")
    imagem.innerHTML=""
    imagem.appendChild(imge)
}

function validar() {
    var agora = new Date()
    var anoagora = agora.getFullYear()
    var anonasc = Number(document.getElementById("nasc").value)
    var idade = anoagora - anonasc
    var femi = document.getElementsByName("quest")[0]
    var mascu = document.getElementsByName("quest")[1]

    
    if (femi.checked == true) {
        if (idade >= 0 && idade <= 10){
            parag.style.textAlign= "center"
            parag.innerHTML = `Voce é uma meni0.na de ${idade} anos`
            inseririmagem("imagens/crianca.jpg")

        }
        else if (idade >= 11 && idade <= 18){
            parag.style.textAlign= "center"
            parag.innerHTML = `Voce é uma adolescente de ${idade} anos`
            inseririmagem("imagens/adolescente.jpg")
        }
        else if (idade >= 19 && idade <= 29){
            parag.style.textAlign= "center"
            parag.innerHTML = `Voce é uma jovem adulta de ${idade} anos`
            inseririmagem("imagens/jovemadulto.jpg")
        }
        else if (idade >= 30 && idade <= 49){
            parag.style.textAlign= "center"
            parag.innerHTML = `Voce é uma adulta de ${idade} anos`
            inseririmagem("imagens/adulto.jpg")
        }
        else if (idade >= 50){
            parag.style.textAlign= "center"
            parag.innerHTML = `Voce é uma senhora de ${idade} anos`
            inseririmagem("imagens/idoso.jpg")
        } 
    } 
    if (mascu.checked == true) {
        if (idade >= 0 && idade <= 10){
            parag.style.textAlign= "center"
            parag.innerHTML = `Voce é um menino de ${idade} anos`
            inseririmagem("imagens/criancamenino.jpg")

        }
        else if (idade >= 11 && idade <= 18){
            parag.style.textAlign= "center"
            parag.innerHTML = `Voce é um adolescente de ${idade} anos`
            inseririmagem("imagens/adolescentemenino.jpg")
        }
        else if (idade >= 19 && idade <= 29){
            parag.style.textAlign= "center"
            parag.innerHTML = `Voce é um jovem adulto de ${idade} anos`
            inseririmagem("imagens/jovemadulto.jpg")
        }
        else if (idade >= 30 && idade <= 49){
            parag.style.textAlign= "center"
            parag.innerHTML = `Voce é uma adulto de ${idade} anos`
            inseririmagem("imagens/adultohomem.webp")
        }
        else if (idade >= 50){
            parag.style.textAlign= "center"
            parag.innerHTML = `Voce é uma senhor de ${idade} anos`
            inseririmagem("imagens/idoso.jpg")
        } 
    }
        
}