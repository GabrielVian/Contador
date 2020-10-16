
var num
num = 0
document.cookie = num
contador = document.getElementById("contador")
function soma(i){
    num += i
    contador.innerHTML = `<h1 id="contador">${num}</h1>`
}
function zerar(){
    num = 0
    contador.innerHTML = `<h1 id="contador">${num}</h1>`
}
