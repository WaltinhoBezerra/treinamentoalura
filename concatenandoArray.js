const salaDeMatematica = ["Walter","Heitor","Thanos","Nebulosa","Peck","Legolas",] 
const salaFisica = ["Maria","José","Sonia","Rita","Severino","Well",]

const salaJuntas = salaDeMatematica.concat(salaFisica);

//console.log(`"Essa é a lista das salas juntas: " ${salaJuntas}`);


let mediaMat = ["10", "8", "6", "4", "2", "0"];
const mediaFis = ["9", "7", "5", "3", "1", "0.5"];

let mediaPorAlunoMat = [salaDeMatematica, mediaMat];
let mediaPorAlunoFis = [salaFisica, mediaFis];

console.log(`${mediaPorAlunoMat [0][0]}, a sau média é:  ${mediaPorAlunoFis[1][0]}`)