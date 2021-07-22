const TIMEOUT = 2000;
const SUCCESS_STATUS = 'OK';

// --------------------------------------------------------------------
// A função simulateRequest simula uma requisição para uma API externa
// Esse tipo de função que "chama outra função" é chamada de
// "currying function" https://javascript.info/currying-partials
// não se preocupe, estudaremos isso mais futuramente
// --------------------------------------------------------------------

const simulateRequest = (response) => (callback) => {
  setTimeout(() => {
    callback(response);
  }, TIMEOUT);
};

export const getMovies = async () => (
  fetch('http://localhost:3001/movies').then((movies) => movies.json())
);

export const getMovie = async (movieId) => fetch(`http://localhost:3001/movies/${movieId}`).then((movies) => movies.json());

export const updateMovie = async (updatedMovie) => (
	fetch(`http://localhost:3001/movies/${updatedMovie.id}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedMovie),
  })
	// .then((movie) => movie.json())
  // new Promise((resolve) => {
  //   const movies = readMovies().map((movie) => {
  //     if (movie.id === parseInt(updatedMovie.id, 10)) {
  //       return { ...movie, ...updatedMovie };
  //     }
  //     return movie;
  //   });
  //   saveMovies(movies);
  //   simulateRequest(SUCCESS_STATUS)(resolve);
  // })
);

export const createMovie = async (movieData) => (
  fetch('http://localhost:3001/movies/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(movieData),
  })
	// .then((movie) => movie.json())
  // new Promise((resolve) => {
  //   let movies = readMovies();
  //   const nextId = movies[movies.length - 1].id + 1;
  //   const newMovie = { ...movieData, id: nextId };
  //   movies = [...movies, newMovie];
  //   saveMovies(movies);
  //   simulateRequest(SUCCESS_STATUS)(resolve);
  // })
);

export const deleteMovie = (movieId) => {
  fetch(`http://localhost:3001/movies/${movieId}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
	// .then((movie) => movie.json());
};
