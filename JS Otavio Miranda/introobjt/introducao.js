//objeto

const pessoa1 = {nome: 'luiz', sobrenome: 'miranda', idade: 25}

console.log(pessoa1.nome)

function criaPessoa(nome, sobrenome, idade){
    return {nome, sobrenome, idade}
}

const pessoa2 = criaPessoa('joao', 'almeida', 30)
const pessoa3 = criaPessoa('maria', 'almeida', 50)
const pessoa4 = criaPessoa('joana', 'almeida', 22)
const pessoa5 = criaPessoa('leticia', 'almeida', 35)

console.log(pessoa2)
console.log(pessoa3)
