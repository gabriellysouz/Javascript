
function exibirResul(id, texto){
    let resul = document.getElementById(id)
    resul.innerHTML = texto
}


function calcularImc() {
    let altura  = Number(document.getElementById('altura').value)
    let peso = Number(document.getElementById('peso').value)
    let mensagem = `Seu IMC é de ${imc(altura,peso).toFixed(2)}`
    exibirResul('resulIMC', mensagem)
}

function imc(altura, peso){
    return peso / (altura * altura)
}

function calcularAreaRetangular() {
    let altura = Number(document.getElementById('alturacm').value)
    let largura = Number(document.getElementById('largura').value)
    let mensagem = `A area do seu retangulo é de ${retangulo(altura, largura)}cm e seu perimetro é ${perimetro(altura, largura)}cm`
    exibirResul('resulAreaRet', mensagem)
}

function retangulo(altura, largura){
    return altura*largura
}
function perimetro(altura, largura){
    return 2*(altura+largura)
}

function converterDolar(){
    let dolar = Number(document.getElementById('dolar').value)
    let mensagem = `$${dolar.toFixed(2)} é equivalente a R$${converte(dolar).toFixed(2)}`
    exibirResul('resulDolar', mensagem)
}
function converte(n1){
    let cotaçaoDolar = 4.80
    return n1 * cotaçaoDolar
}

function calcularAreaCirculo(){
    let raio = Number(document.getElementById('raio').value)
    let mensagem = `A area do circulo é de ${circulo(raio).toFixed(1)}cm²`
    exibirResul('resulAreaCirc', mensagem)
}
function circulo(r){
    let pi = 3.14
    return pi * (r * r)
}

function calcularTabuada(){
    let n1 = Number(document.getElementById('numTabuada').value)
    let mensagem = `Segue a tabuada do numero ${n1}:`
    exibirResul('resulTabuada', mensagem)
    tabuada(n1)
}

function tabuada(n){
    let tabu = document.getElementById('tabu')
    for (i = 0; i < 11; i++){
        tabu.innerHTML += `${n} x ${i} = ${n*i}<br>`
    }
}

function calcularFatorial(){
    let n = Number(document.getElementById('numFatorial').value)
    let mensagem = `O fatorial de ${n} é ${fatorial(n)}`
    exibirResul('resulFatorial', mensagem)
}

function fatorial(n){
    let fat = 1
    for (i=1; i <= n; i++){
        fat *= i
    }
    return fat
}