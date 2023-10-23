const fs = require('fs');

function getTodosFavoritos() {
  return JSON.parse(fs.readFileSync('favoritos.json'));
}

function insereFavorito(id) {
  const listaLivros = JSON.parse(fs.readFileSync('livros.json'));
  const listaFavoritos = JSON.parse(fs.readFileSync('favoritos.json'));

  const novoFavorito = listaLivros.find(livro => livro.id === id);

  const listaAtualizada = [...listaFavoritos, novoFavorito];

  fs.writeFileSync('favoritos.json', JSON.stringify(listaAtualizada));
}

function deletaFavoritoPorId(id) {
  const lista = JSON.parse(fs.readFileSync('favoritos.json'));

  const listaAtualizada = lista.filter(favorito => favorito.id !== id);

  fs.writeFileSync('favoritos.json', JSON.stringify(listaAtualizada));
}

module.exports = {
  getTodosFavoritos,
  insereFavorito,
  deletaFavoritoPorId
};
