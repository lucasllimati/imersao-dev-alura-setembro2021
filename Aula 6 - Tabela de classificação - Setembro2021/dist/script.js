var rafa = {
    name:"Rafa",
    vitorias: 2,
    empates: 1,
    derrotas: 1,
    pontos: 0
};

var paulo = {
    name:"Paulo",
    vitorias: 1,
    empates: 1,
    derrotas: 2,
    pontos: 0
};

// console.log(rafa.vitorias)
// console.log(paulo.empates)

console.log(rafa)
var resultadoDosPontos
calculaPontos(rafa);


function calculaPontos(jogador) {
    var pontos = (jogador.vitorias * 3) + jogador.empates;
    console.log(pontos);
}
console.log(rafa)
