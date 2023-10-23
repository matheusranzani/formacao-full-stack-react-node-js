const {
  getTodosFavoritos,
  insereFavorito,
  deletaFavoritoPorId,
} = require('../servicos/favorito');

function getFavoritos(req, res) {
  try {
    const lista = getTodosFavoritos();

    res.send(lista);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function postFavorito(req, res) {
  try {
    const { id } = req.params;

    insereFavorito(id);

    res.status(201);
    res.send('Favorito inserido com sucesso');
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function deleteFavorito(req, res) {
  try {
    const { id } = req.params;

    if (id && Number(id)) {
      deletaFavoritoPorId(id);

      res.send('Favorito excluído com sucesso');
    } else {
      res.status(422);
      res.send('ID inválido');
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

module.exports = {
  getFavoritos,
  postFavorito,
  deleteFavorito
}
