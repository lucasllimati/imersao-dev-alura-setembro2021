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
}

function listaFilmesNaTela(filme) {
  console.log(filme);
  var elementoFilmeFavorito = "<img src=" + filme + ">";
  var elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML =
    elementoListaFilmes.innerHTML + elementoFilmeFavorito;
  // filmeFavorito.value = "";
}

function listaNomeFilmesNaTela(nomeFilme) {
  console.log(filme);
  var elementoNomeFilmeFavorito = "<p>" + filme + "</p>";
  var elementoListaNomeFilmes = document.getElementById("listaFilmes");
  elementoListaNomeFilmes.innerHTML =
    elementoListaNomeFilmes.innerHTML + elementoListaNomeFilmes;
  // filmeFavorito.value = "";
}
