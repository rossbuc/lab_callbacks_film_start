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
  const filmsOfGenre = cinema.films.filter((film) => {
    return film.genre == genre;
  });
  return filmsOfGenre;
};
module.exports = Cinema;
