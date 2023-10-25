function calcular(){
    let num = Number(document.getElementById("num").value)
    let tab = document.getElementById("tabuada")
    let c = 1
    tab.innerHTML=''
    while(c<=10){
        let item = document.createElement("option")
        item.text= `${num} x ${c} = ${num*c}`
        item.value = `tab${c}`
        tab.appendChild(item)
        c++
    }
} 