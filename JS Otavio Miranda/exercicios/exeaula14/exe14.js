const num1 = Number(prompt('Digite um numero'))
let numero = document.getElementById('num')
let texto = document.getElementById('texto')

numero.innerHTML= num1
texto. innerHTML += `<p>Raiz quadrada:  ${Math.sqrt(num1)}</p>`
texto. innerHTML += `<p>${num1} é inteiro: ${Number.isInteger(num1)}</p>`
texto. innerHTML += `<p>${num1} é NaN: ${Number.isNaN(num1)}</p>`
texto. innerHTML += `<p>Arredondando para cima: ${Math.ceil(num1)}</p>`
texto. innerHTML += `<p>Arredondando para baixo: ${Math.floor(num1)}</p>`
texto. innerHTML += `<p>Com duas casas decimais: ${num1.toFixed(2)}</p>`



