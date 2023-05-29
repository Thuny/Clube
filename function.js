const prompt = require('prompt-sync')();
let x = Number(prompt("Número 1: "))
let y = Number(prompt("Número 2: "))
function calculos(n1, n2) {
    console.log(n1, "+", n2, " = ", n1+n2)
    console.log(n1, "-", n2, " = ", n1-n2)
    console.log(n1, ".", n2, " = ", n1*n2)
    var a = n1/n2
    console.log(n1, "/", n2, " = ", a.toFixed(2))
}
calculos(x, y)