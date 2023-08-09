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
  const film = cinema.films.find((film) => film.title === 'Dunkirk')
  return film;
};

module.exports = Cinema;
