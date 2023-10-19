//55. Escreva um programa que solicite ao usuário um número N e diga se o mesmo é primo ou não.

const prompt = require("prompt-sync")({sigint:true})
let num = parent(prompt('Digite um numero para saber se é primo: '))
let controle = 0

if (num == 1){
    console.log(`O numero ${num} nao é primo`)
}
else if (num == 2){
    console.log(`O numero ${num} é primo`)
}
else{
    for (c=2; c< num; c++){
        if (num % c == 0){
            controle += 1
        }
    }
    if (controle >= 1){
        console.log(`O numero ${num} nao é primo`)
    }
    else{
        console.log(`O numero ${num} é primo`)
    }
}


