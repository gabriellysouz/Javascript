export default function validaIdade(campo){

    const nascimento = new Date (campo.value)
    if(!validaMaioridade(nascimento)){
        campo.setCustomValidity('O usuario não é maior de idade')
    }
}

function validaMaioridade(data){
    const dataAtual = new Date ()
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())

    return dataAtual >= dataMais18
}
