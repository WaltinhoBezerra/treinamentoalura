function Multitiplicacao (num01, num02){
    return num01 * num02;    
}

function soma (som01, som02, som03){
    return som01 + som02 + som03;
}

function subtracao (sub01, sub02) {
    return sub01 - sub02;
}

/*console.log(Multitiplicacao(10, 20));
console.log(Multitiplicacao(3,4));
console.log(soma(10,15));
console.log(subtracao(50,40));*/

//console.log(Multitiplicacao(soma(1, 1, 1), subtracao(45,40)));
//console.log(Multitiplicacao(25, 10));

//console.log(soma(10, 10, 10));

/*function name (nom){
    return "walter";
}

function Endereco (Ender){
    return "Rua tancredo de almeida neves";
}

function cpf (cpf){
    return "2222222222-22";
}

console.log(name() + Endereco + cpf);*/


//function cumprimentaPessoa(pessoa){
   // console.log(`oi, ${pessoa}!`)
  // }
   
 //  cumprimentaPessoa('Helena')

 //  function cumprimentar(){
 //   return 'Oi gente!'
  // }
   
 //  function cumprimentaPessoa(nomePessoa) {
  //  console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
  // }
   
  // cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”

  // function comParametro(param) {
    //console.log(param)
//}
//comParametro('ÇÇ')

//outra forma de declarar uma function

const novaFuncao = function (numer01, numer02){ return numer01 + numer02};

///console.log(novaFuncao(3,5));

// ARROW FUNCTION

//const funcaoArrow = (numb01, numb02) => numb01 + numb02;
//console.log(funcaoArrow(1,2));

function VerificaNumero (primeiroNum, segundoNum){
    if (primeiroNum >= 12 || segundoNum <= 8) {
    return "primeira condição"
} else {
    return "segunda condição"
    }
};

const verificanumero01 = (primeiroNum, segundoNum) => {
    if (primeiroNum >= 5 && segundoNum <= 10) {
       return "Deu certo na primeira condição"
    } else {
        return "Deu certo na segunda condição"
    }
}

console.log(verificanumero01(6,11));
console.log(VerificaNumero(5, 3));

const somaNumerosPequenos = (n1, n2) => {
    if (n1 || n2 > 10) {
        return "Somente Leitura"
    } else {
        return n1 + n2;
    }
}

console.log(somaNumerosPequenos(5, 9));