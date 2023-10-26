let num1 = 10
let num2 = 2.5
let num3 = 5.8274829
let temp = num1 * 'ola'
let temp2 = num1 * num2

console.log(`Concatenação ${num1.toString() + num2} `)
console.log (`Numero binario ${num1.toString(2)}`)
console.log(`Numero 5.8274829 arredondado ${num3.toFixed(2)}`)
console.log(`O numero 10 inteiro é inteiro? ${Number.isInteger(num1)}`)
console.log(`O numero 2.5 inteiro é inteiro? ${Number.isInteger(num2)}`)
console.log(`A conta "10 x ola" tem resultado "not a number"? ${Number.isNaN(temp)}`)
console.log(`A conta "10 x 2.5" tem resultado "not a number"? ${Number.isNaN(temp2)}`)

