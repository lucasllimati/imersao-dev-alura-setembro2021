function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;
  var nomeFilmeFavorito = document.getElementById("nomefilme").value;
  if (filmeFavorito.endsWith(".jpg")) {
    listaFilmesNaTela(filmeFavorito);
    listaNomeFilmesNaTela(nomeFilmeFavorito);
  } else {
    console.error("Endereço de filmes inválido.");
  }

  document.getElementById("filme").value = "";
  document.getElementById("nomefilme").value = "";
}

function listaFilmesNaTela(filme) {
  console.log(filme);
  var elementoFilmeFavorito = "<img src=" + filme + ">";
  var elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito;
  // filmeFavorito.value = "";
}

function listaNomeFilmesNaTela(nome) {
  console.log(nome);
  var elementoNomeFilmeFavorito = "<h3>" + nome + "</h3>";
  var elementoListaNomeFilmes = document.getElementById("listaFilmes");
  elementoListaNomeFilmes.innerHTML = elementoListaNomeFilmes.innerHTML + elementoNomeFilmeFavorito;
  // filmeFavorito.value = "";
}