//54. Escreva um programa que calcule e exiba o valor da potência de um número informado pelo usuário elevado a um expoente também informado

const promtp = require("prompt-sync")({sigint:true})

let num = promtp('Digite um numero: ')
let exp = promtp('Digite o expoente: ')
let resul = 1

for (let n1 = 1; n1<= exp; n1++){
    resul *=num
}
console.log(`O numero ${num} elevado a ${exp} é igual a ${resul}`)
