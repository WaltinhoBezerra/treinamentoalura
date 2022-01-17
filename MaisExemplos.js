let telefone = 12341234;
console.log("O telefone é " + String(telefone)); 
// teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a 
//concatenação entre as strings

let telefone01 = 12341234;
console.log("O telefone é " + telefone01.toString()); 
// o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens 
//de programação.

let usuarioConectado = false;
console.log(String(usuarioConectado)); // teremos a conversão da booleana para string, 
//nesse caso teremos uma string “false”.
usuarioConectado = true;
console.log(String(usuarioConectado)); // agora teremos uma string “true”.


let usuarioConectado01 = false;
console.log(Number(usuarioConectado01)); // teremos a conversão da booleana para número, sendo que false 
//(falso) retorna o número 0.
usuarioConectado01 = true;
console.log(Number(usuarioConectado01)); // agora teremos a conversão de true (verdadeiro) para o número 1.