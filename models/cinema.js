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

module.exports = Cinema;
