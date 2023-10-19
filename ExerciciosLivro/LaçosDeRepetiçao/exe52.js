//52. Escreva um programa que solicite ao usuário um número N e exiba a soma de todos os números de 1 a N.

const prompt = require('prompt-sync')({sigint:true})
let num = prompt('Digite um numero: ')

let n = 0

for(c=1; c<= num; c++){
    n+=c
}
console.log(`A soma de 1 a ${num} é ${n}`)

