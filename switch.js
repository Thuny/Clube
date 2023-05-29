const prompt = require('prompt-sync')();
let fim = 0
while (fim == 0) {
    let compras = prompt("Qual foi sua compra? ")
    switch (compras) {
        case "Goiaba":
            console.log("Deu 1,99")
            fim++
            break;
        case "Mamão":
            console.log("Deu 2,99")
            fim++
            break;
        case "Caqui":
            console.log("Deu 0,99")
            fim++
            break;
        default:
            console.log('Digite um nome válido')
            break;
    }
}