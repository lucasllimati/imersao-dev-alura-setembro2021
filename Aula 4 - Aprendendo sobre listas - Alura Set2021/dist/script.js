var listaFilmes = ["Yesterday", "A chegada", "Escola de Rock"];
// elemento            1             2              3
// índice              0             1              2

// adicionando novos elementos
listaFilmes.push("Harry Potter 3");
// adicionando indice 4
listaFilmes.push("Harry Potter 4");
listaFilmes.push("Harry Potter 5");

//      valor inicial,       condição,          expressão final
for (var indice = 0; indice < listaFilmes.length; indice++) {
  document.write("<p>" + listaFilmes[indice] + "</p>");
}

// var filme1 = "Yesterday";
// var filme2 = "A chegada";
// var filme3 = "Escola de Rock";

// Experimente o h1, strong
// document.write("<p>" + filme1 + "</p>");
// document.write("<p>" + filme2 + "</p>");
// document.write("<p>" + filme3 + "</p>");

// document.write("<p>" + listaFilmes[0] + "</p>");
// document.write("<p>" + listaFilmes[1] + "</p>");
// document.write("<p>" + listaFilmes[2] + "</p>");
// document.write("<p>" + listaFilmes[3] + "</p>");