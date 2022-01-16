const usuarioLogado = true;
const contaPaga = false;

//truthy or falsy
// o => false
// 1 => true
/*console.log(0 == false);
console.log("" == false);
console.log(1 == true);*/

// null
// undefined

let valorNumerico = 3;
let textString = "Waltinho"
/*console.log(typeof valorNumerico);
console.log(typeof textString);*/


//***** *
// conversões implíciata
const numero = 456;
const numMaisText = "456a"
const numeroString = "456";

console.log(numero === numeroString); // false
console.log(numero == numeroString); // true
console.log(numero + numeroString); // 456456 (foi concatenado)


// conversões explíciata
//Number
//String

console.log(numero + Number(numeroString)); // 912 (foi somado)
console.log(numero + Number(numMaisText)); // NaN Not a Number (não é número)




