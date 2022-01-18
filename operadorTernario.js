const idadeMinima = 18;
const idadeCli = 19;

if (idadeMinima <= idadeCli){
    console.log("cerveja");
} else {
    console.log("suco");
};

console.log(idadeCli >= idadeMinima ? "cerveja" : "suco");

const sexo = "masculino";
const idade = 18;
const altura = 1.80;

if (sexo === "masculino" && idade === 18 && altura === 1.90){
    console.log(true);
}   else {
    console.log(false);
};

if (sexo === "masculino" && idade === 18 || altura === 1.90){
    console.log(true);
}   else {
    console.log(false);
};

console.log(sexo === "masculino" && idade === 18 ? "verdade" : "mentira");