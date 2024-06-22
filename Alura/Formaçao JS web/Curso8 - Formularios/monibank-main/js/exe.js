
function digitoUm(num){
    num = num.toString()
    let soma = 0 
    let multi = 10

    for (let posicao = 0; posicao < 9; posicao ++){
        soma += parseInt(num[posicao]) * multi
        multi --
    }

    soma = (soma * 10) % 11

    if (soma == 10 || soma==11){
        soma = 0
    }

    return soma
}

function digitoDois(num){
    num = num.toString()
    let soma = 0 
    let multi = 11

    for (let posicao = 0; posicao < 10; posicao ++){
        soma += parseInt(num[posicao]) * multi
        multi --
    }

    soma = (soma * 10) % 11

    if (soma == 10 || soma==11){
        soma = 0
    }

    return soma
}

function mostrarNumerosVerificadores(num){
    let digito1 = digitoUm(num)

    let cpfCom1Digito = num.toString() + digito1.toString()

    let digito2 = digitoDois(cpfCom1Digito)

    let cpfCompleto = cpfCom1Digito.toString() + digito2.toString()

    console.log(num + '-' + digito1 + digito2)

}

mostrarNumerosVerificadores(969221800)
mostrarNumerosVerificadores(989143300)
mostrarNumerosVerificadores(222716420)

// saida 
// 969221800-70
// 989143300-52
// 222716420-43



