
//let apresentacao = ['ola', 'eu', 'sou', 'a', 'Gaby']
//let[saudaçao, pronome] = apresentacao
//
//console.log(saudaçao, pronome)


//let apresentacao = ['ola', 'eu', 'sou', 'a', 'Gaby']
//let [saudaçao, , , ,nome] = apresentacao
//
//console.log(saudaçao, nome)


//let apresentacao = ['ola', 'eu', 'sou', 'a', 'Gaby']
//let [saudaçao, ...resto] = apresentacao
//
//console.log(saudaçao, resto)


function getArray(){
    return ['ola', 'eu', 'sou', 'a', 'Gaby']
}
let[saudaçao, , , , nome] = getArray()

console.log(saudaçao, nome)
