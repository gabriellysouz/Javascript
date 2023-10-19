//50. Crie um programa que solicite ao usuário um número e exiba a tabuada desse número utilizando um laço de repetição.

const prompt = require("prompt-sync")({sigint:true})
let num = parseInt(prompt("Digite um nuemro: "))
for (c=1; c <= 10; c++){
    console.log(`${num} x ${c} = ${num * c}`)
}

