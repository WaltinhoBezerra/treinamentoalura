var alunosMaiu = ['Alex','Alexandre','Alexsandra','Bruna','Brenda','Camila','Cintia','Dolores','Dimas','Dario','Eliza','Elizaberh','Enaldo','Elenice','Fábia','Flavia','Fernanda','Firmina','Fedora','Gil','Ilda','Ivani','Juliana','Jaqueline','Jurema','Jaci','Karlota','Kimbely','Katia','Laura','Lena','Lina','Lara','Luciana','Lorena','Livia','Maria','Miriam','Monica','Marly','Narubia','Nancy','Norberto','Nubia','Paula','Pietra','Paola', 'Zaira']
//var nomesAtu = alunosMaiu.map(nome => nome.toUpperCase());

var nomesAtu = alunosMaiu.map(nomeMaiu);

function nomeMaiu(nome){
    return nome.toUpperCase();
}

console.log(nomesAtu);