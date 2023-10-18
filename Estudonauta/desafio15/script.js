function calcular(){
    let num = Number(document.getElementById("num").value)
    let resul = document.getElementById("tabu")
    resul.innerHTML = ''
    
    for (var n = 1; n<=10; n+=1){
        tabu = n * num
        resul.innerHTML += `<br>${n} x ${num} = ${tabu}`
    }
}