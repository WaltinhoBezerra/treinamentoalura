const nota01 = 10
const nota02 = 8
const nota03 = 5.5
const nota04 = 4.5 

//console.log((nota01 + nota02 + nota03 + nota04)/4)

const notas = [10,8,5.5,4.5];

let media = ((notas[0] + notas[1] + notas[2] + notas[3])/notas.length);

//console.log((notas[0] + notas[1] + notas[2] + notas[3])/2);
//console.log(media);
//console.log(notas.length);


//notas.push(1,2.5,4);

//console.log(notas);

//console.log(media);

//const notasFinais = [4,8,3,9,10]
//console.log(notasFinais);

//notasFinais.pop();
///console.log(notasFinais);

//let mediaFinal = ((notasFinais[0] + notasFinais[1] + notasFinais[2] +notasFinais[3])/notasFinais.length);
//console.log(`"A média final desse aluno é" ${mediaFinal}`);

//const arrayVazia = [,,,];
//console.log(arrayVazia.length)
//arrayVazia.push(50)
//console.log(arrayVazia)
//console.log(arrayVazia.length)

var alunos = ['Alex','Alexandre','Alexsandra','Bruna','Brenda','Camila','Cintia','Dolores','Dimas','Dario','Eliza','Elizaberh','Enaldo','Elenice','Fábia','Flavia','Fernanda','Firmina','Fedora','Gil','Ilda','Ivani','Juliana','Jaqueline','Jurema','Jaci','Karlota','Kimbely','Katia','Laura','Lena','Lina','Lara','Luciana','Lorena','Livia','Maria','Miriam','Monica','Marly','Narubia','Nancy','Norberto','Nubia','Paula','Pietra','Paola', 'Zaira'] 

let sala01 = alunos.slice(0, alunos.length/2);
let sala02 = alunos.slice(alunos.length/2, alunos.length);

//console.log(`"Alunos da sala01: " ${sala01}`);
console.log(`"Alunos da sala02: ${sala02} "`);
//console.log(`"A quantidade de alunos nessa série:" ${alunos.length}`);
//console.log(`"Toral de alunos:" ${alunos}`);

sala01.splice(1,3,"Waltinho");
//console.log(`"A nova lista de chamda, da sala01 é: " ${sala01}`);

sala02.splice(0, 5, "waltinho Jr.")
//console.log(`"A nova lista de chamada, da sala02 é: " ${sala02}`);



