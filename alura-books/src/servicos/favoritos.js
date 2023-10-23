import axios from 'axios';

const favoritosAPI = axios.create({baseURL: 'http://localhost:8000/favoritos'});

async function getFavoritos() {
  return (await favoritosAPI.get('/')).data;
}

async function postFavorito(id) {
  await favoritosAPI.post(`/${id}`);
}

async function deleteFavorito(id) {
  await favoritosAPI.delete(`/${id}`);
}

export {
  getFavoritos,
  postFavorito,
  deleteFavorito
};
