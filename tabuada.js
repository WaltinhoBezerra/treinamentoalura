var tabDe = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var indice = 5
var tabuada = 0

for (i=0; i<=10; i++){
    tabuada = tabDe[indice] * i
    
    console.log(i, ' x ', indice , ' = ', tabuada)
}

// função callback
var somaTotal = 0;
tabDe.forEach(function(numeros){
    somaTotal += numeros
})

console.log(somaTotal);
