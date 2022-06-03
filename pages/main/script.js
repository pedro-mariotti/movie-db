let index = 0;
const API_URL = 'http://localhost:3000/filmes';
let movieTitles = document.getElementsByClassName('filmTitle');
let rating = document.getElementsByClassName('rating');
let overview = document.getElementsByClassName('movieOverview');
let releaseDate = document.getElementsByClassName('releaseDate');
let originalLanguage = document.getElementsByClassName('originalLanguage');
let IMG_API_URL = 'https://image.tmdb.org/t/p/w500';
let carouselImg = document.getElementsByClassName('carouselImg');

function showImg(i) {
  index += i;

  let images = document.getElementsByClassName('carouselItem');

  for (i = 0; i < images.length; i++) {
    images[i].style.display = 'none';
  }
  if (index > images.length - 1) {
    index = 0;
  }
  if (index < 0) {
    index = images.length - 1;
  }
  images[index].style.display = 'block';
}

(async () => {
  try {
    const res = await fetch('http://localhost:3000/filmes');
    if (res.status >= 400) {
      throw new Error('Bad response from server');
    }

    const movieList = await res.json();

    console.log(movieList);
    for (let i = 0; i < 3; i++) {
      movieTitles[i].innerHTML = movieList[i].title;
      rating[i].innerHTML = movieList[i].vote_average;
      overview[i].innerHTML = movieList[i].overview;
      releaseDate[i].innerHTML = movieList[i].release_date;
      if (movieList[i].original_language == 'en') {
        originalLanguage[i].innerHTML = 'English';
      } else {
        originalLanguage[i].innerHTML = movieList[i].original_language;
      }
      carouselImg[i].src = IMG_API_URL + movieList[i].poster_path;
    }
  } catch (err) {
    console.error(err);
  }
})();
