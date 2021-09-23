var carta1 = {
  nome: "Bulbassauro",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
  atributos: {
   ataque: 7,
   defesa: 8,
   magia: 6
  }
};

var carta2 = {
  nome: "Darth Vader",
  imagem: "https://sm.ign.com/ign_br/screenshot/default/darth-vader_5yvm.jpg",
  atributos: {
   ataque: 9,
   defesa: 8,
   magia: 2
  }
};

var carta3 = {
  nome: "Shiryu",
  imagem: "https://images.uncyc.org/pt/thumb/1/18/Shiryulagartixa.jpg/280px-Shiryulagartixa.jpg",
  atributos: {
   ataque: 5,
   defesa: 9,
   magia: 10
  }
};

var listaCartas = [carta1, carta2, carta3];
var cartaMaquina
var cartaJogador

function sortearCarta(){
 cartaMaquina = listaCartas[parseInt(Math.random() * 3)];
 cartaJogador = listaCartas[parseInt(Math.random() * 3)];
 
 while (cartaMaquina == cartaJogador){
   cartaJogador = listaCartas[parseInt(Math.random() * 3)];
 }
 
 document.getElementById("btnSortear").disabled = true;
 //verificar se há atributo selecionado antes de habilitar o botão jogar 
 document.getElementById("btnJogar").disabled = false;
 exibirCarta("jogador");
}

function selecionaAtributo(){
 var radioAtributos = document.getElementsByName("atributo");
  for(var i = 0; i < radioAtributos.length; i++){
   if(radioAtributos[i].checked == true){
     return radioAtributos[i].value;
   }
 }
}

function jogar(){
 var atributoSelecionado = selecionaAtributo();
 var htmlResultado = "";
 var divResultado = document.getElementById("resultado");
 if(cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]){
   htmlResultado = "<p class='resultado-final'>Venceu</p>"
 }else if(cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]){
   htmlResultado = "<p class='resultado-final'>Perdeu</p>"
 }else{
   htmlResultado = "<p class='resultado-final'>Empatou</p>"
 }
 divResultado.innerHTML = htmlResultado;
 document.getElementById("btnJogar").disabled = true;
 exibirCarta("maquina");
}

function exibirCarta(player){
 var divCarta = document.getElementById("carta-" + player);
 var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
 var tagHTML = "<div id='opcoes' class='carta-status'>"  
 var opcaoTexto = "";
 var cartas;
 
 if (player == "jogador"){    
   cartas = cartaJogador;
 }else{
   cartas = cartaMaquina;
 }
 
 divCarta.style.backgroundImage = `url(${cartas.imagem})`;
 
 for(var atributo in cartas.atributos){
   opcaoTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartas.atributos[atributo] + "<br>";
 }
 var nome = `<p class="carta-subtitle"> ${cartas.nome}</p>`
 divCarta.innerHTML = moldura + nome + tagHTML + opcaoTexto + "</div>";
}

/*function exibirCartaMaquina(){
 var divCartaMaquina = document.getElementById("carta-maquina");
 divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
 var moldura =
 '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
 
 var tagHTML = "<div id='opcoes' class='carta-status'>"
 
 var opcaoTexto = "";
 for(var atributo in cartaMaquina.atributos){
   opcaoTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>";
 }
 var nome = `<p class="carta-subtitle"> ${cartaMaquina.nome}</p>`
 divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcaoTexto + "</div>";
}*/

