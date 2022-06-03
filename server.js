const fetch = require('cross-fetch');
const express = require('express');
const app = express();
const API_URL =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
let IMG_API_URL = 'https://image.tmdb.org/t/p/w500';

app.use(express.static('public'));

app.get('/filmes', async (req, res) => {
  const response = await fetch(API_URL);
  const info = await response.json();
  const movieList = info.results;

  movieList.find((movie) => movie.id === 836225);

  res.json(movieList);
});

app.get('/filmes/:id', async (req, res) => {
  const response = await fetch(API_URL);
  const info = await response.json();
  const movieList = info.results;

  res.json(movieList.find((movie) => movie.id === parseInt(req.params.id)));
});

app.listen(3000);
