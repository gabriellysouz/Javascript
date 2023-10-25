
let valores = [8, 1, 7, 4, 2, 9]

for (let posi = 0; posi < valores.length; posi++){
    console.log(`A posiçao ${posi} tem o valor ${valores[posi]}`)
}

console.log('-------------')

for (let pos in valores){
    console.log(`A posiçao ${pos} tem o valor ${valores[pos]}`)
}
