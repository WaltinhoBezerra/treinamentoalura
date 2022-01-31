var listaDeAlunos = ['Walter', 'Alexsandra', 'Junior', 'Heitor'];
var mediaDosAlunos = ['8', '6', '7', '7'];
var listaNotasEAlunos = [listaDeAlunos, mediaDosAlunos];
// Exemplo usando Array
function retornaAlunoENota (nomeDoAluno){
    if (listaDeAlunos.includes(nomeDoAluno)){
        indice = listaDeAlunos.indexOf(nomeDoAluno);
        return listaDeAlunos[indice] + ' sua nota é ' + mediaDosAlunos[indice];
    } else {
        return 'aluno não encontrado'
    }
}
console.log(retornaAlunoENota('Alexsandra'));
// Exemplo usando Matrix

const retornaAlunoENotaDaMatriz = (nomeAlunoMatriz) => {
    if (listaNotasEAlunos[0].includes(nomeAlunoMatriz)){
        indiceMatriz = listaNotasEAlunos[0].indexOf(nomeAlunoMatriz);
        return listaNotasEAlunos[0][indiceMatriz] + ' sua nota é ' + listaNotasEAlunos[1][indiceMatriz];
    } else{
        return 'Aluno não matriculado';
    }
}

console.log(retornaAlunoENotaDaMatriz('Walter'));