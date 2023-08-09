const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getTitles = function (cinema) {
  const titles = [];
  cinema.films.forEach((film) => {
    titles.push(film.title);
  });
  return titles;
};

Cinema.prototype.findByTitle = function (cinema) {
  const film = cinema.films.find((film) => film.title === 'Dunkirk');
  return film;
};

Cinema.prototype.filterByGenre = function (cinema, genre) {
  return cinema.filterByProperty(cinema, "genre", genre)
};

Cinema.prototype.someByYear = function (cinema, year) {
  return cinema.films.some((film) => film.year == year);
};

Cinema.prototype.checkEveryFilmLength = function (cinema, length) {
  return cinema.films.every((film) => {
    film.length >= length;
  });
};

Cinema.prototype.runtimeOfAllFilms = function (cinema) {
  const runtimeTotal = cinema.films.reduce((runningTotal, film) => {
    return runningTotal + film.length;
  }, 0);
  return runtimeTotal
};

Cinema.prototype.filterByYear = function (cinema, year) {
  return cinema.filterByProperty(cinema, "year", year)
}

Cinema.prototype.filterByProperty = function (cinema, property, desiredValue) {
  const filmsOfProperty = cinema.films.filter((film) => {
    return film[property] == desiredValue;
  });
  return filmsOfProperty;
}
module.exports = Cinema;
