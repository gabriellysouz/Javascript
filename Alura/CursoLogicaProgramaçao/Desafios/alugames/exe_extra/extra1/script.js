//Crie um programa que verifica se uma palavra ou frase é um palíndromo.

function VerificarPalindromo(){
    let palavraEmOrdem = document.getElementById('caixa').value;
    let palavraInvertida= "";
    for (let i = palavraEmOrdem.lenght - 1; i >= 0; i--){
        palavraInvertida += palavraEmOrdem[i];
    }
    alert(palavraInvertida)

    
}

