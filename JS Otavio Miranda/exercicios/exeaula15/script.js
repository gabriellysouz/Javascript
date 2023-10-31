let nom = document.getElementById('nome')
let sobrenom = document.getElementById('sobrenome')
let pes = document.getElementById('peso')
let altur = document.getElementById('altura')
let resul = document.getElementById('resultado')
let pessoa = []


function criaPessoa(nome,sobrenome,peso,altura){
    return {nome,sobrenome,peso,altura}
}

function enviar(){
    let pessoaob = criaPessoa(nom.value, sobrenom.value, pes.value, altur.value)
    pessoa.push(pessoaob)
    console.log(pessoa)
    resul.innerHTML += `<p>${pessoaob.nome} ${pessoaob.sobrenome} ${pessoaob.peso} ${pessoaob.altura}</p>`
}

