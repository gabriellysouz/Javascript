let varA = 'A'
let varB = 'B'
let varC = 'C'

const varAConst = varA
varA = varB
varB = varC
varC = varAConst

console.log(varA, varB, varC)