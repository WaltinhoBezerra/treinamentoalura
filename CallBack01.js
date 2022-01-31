var alunosCB = ['Alex','Alexandre','Alexsandra','Bruna','Brenda','Camila','Cintia','Dolores','Dimas','Dario','Eliza','Elizaberh','Enaldo','Elenice','Fábia','Flavia','Fernanda','Firmina','Fedora','Gil','Ilda','Ivani','Juliana','Jaqueline','Jurema','Jaci','Karlota','Kimbely','Katia','Laura','Lena','Lina','Lara','Luciana','Lorena','Livia','Maria','Miriam','Monica','Marly','Narubia','Nancy','Norberto','Nubia','Paula','Pietra','Paola', 'Zaira'] 

/*var indice = 0
alunosCB.forEach(imprimeNome);

function imprimeNome(nome){
    console.log(nome)
}*/

//ponoto extra Método MAP
const notasCB = [10,8,5.5,4.5];

var RetornaMap = notasCB.map(

function notaMAP (nota){
    return nota == 10 ? nota : nota + 1;
    
})

console.log(RetornaMap);

var retornaMaPArrow = notasCB.map( nota => nota == 10 ? nota : nota + 1)
console.log(retornaMaPArrow); 


function notaMAP (nota){
    return nota == 10 ? nota : nota + 1;
}
console.log(notaMAP);
