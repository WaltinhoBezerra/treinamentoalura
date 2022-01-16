const soma = 10 + 10;
const multiplicacao = 10 * 10;
const operacao = (soma + multiplicacao) + 10;
//console.log(operacao);

const forma = "Triangulo";
const altura = 11;
const largura = 5;
let area; 

if (forma === "Quadrado") {
    area = largura * altura
}   else {
    area = (altura * largura) / 2;
}

console.log(area);