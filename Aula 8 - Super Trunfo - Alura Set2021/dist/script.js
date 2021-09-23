var cartasPaulo = {
  nome: "Shiryu de dragão",
  imagem:
    "https://static.wikia.nocookie.net/saintseya/images/9/9e/Shiryu_3_255.png/revision/latest/top-crop/width/360/height/450?cb=20151229134313&path-prefix=pt",
  atributos: {
    ataque: 5,
    defesa: 9,
    magia: 10,
  },
};

var cartaRafa = {
  nome: "Bulbasaur",
  imagem:
    "https://static.wikia.nocookie.net/pokedex-br/images/a/a2/Bulbasauro_Pose.png/revision/latest?cb=20151224122219&path-prefix=pt-br",
  atributos: {
    ataque: 7,
    defesa: 8,
    magia: 6,
  },
};

var cartasGui = {
  nome: "Darth Vader",
  imagem: "https://m.media-amazon.com/images/I/411evoQCNjL.jpg",
  atributos: {
    ataque: 9,
    defesa: 8,
    magia: 2,
  },
};

var cartas = [cartas1, cartas2, cartas3];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 3);
  cartaMaquina = cartas[numeroCartaMaquina];
  console.log(cartaMaquina);

  var numeroCartaJogador = parseInt(Math.random() * 3);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 3);
  }

  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibirOpcoes();
  exibirCartaJogador();
}
console.log(cartas);

function exibirOpcoes() {
  var opcoes = document.getElementById("opcoes");
  var opcoesTexto = "";

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo;
  }
  opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var elementoResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  if (valorCartaJogador > valorCartaMaquina) {
    elementoResultado.innerHTML = "Você venceu";
  } else if (valorCartaJogador < valorCartaMaquina) {
    elementoResultado.innerHTML = "Você perdeu, a carta da máquina é maior";
  } else {
    elementoResultado.innerHTML = "Você empatou";
  }

  console.log(cartaMaquina);

  // // seleciona o nome do atributo
  // console.log(atributoSelecionado)
  // // seleciona o valor do atributo
  // console.log(cartaJogador.atributos[atributoSelecionado])
}

function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"

    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
}
