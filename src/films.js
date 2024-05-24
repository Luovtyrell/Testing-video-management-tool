// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  let result = movies.map(movie => movie.director)
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  let moviesFromDirector = movies.filter(movie => movie.director === director)
  console.log("EXERCICE 2 ->", moviesFromDirector);
  return moviesFromDirector;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
  const moviesFromDirector = getMoviesFromDirector(movies, director)

  let totalScore = moviesFromDirector.reduce((sum, movie) => sum + movie.score, 0)
  let averageScore = totalScore / moviesFromDirector.length
  console.log("EXERCICE 3 ->", averageScore.toFixed(2));
  return parseFloat(averageScore.toFixed(2));
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  let moviesOrdered = movies.map((movie) => movie.title).sort().slice(0, 20)
  console.log("EXERCICE 4 ->", moviesOrdered);
  return moviesOrdered;
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  let moviesArray = [...movies]
  let moviesOrdered = moviesArray.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title)
    }
    return a.year - b.year
  });
  console.log("EXERCISE 5 ->", moviesOrdered);
  return moviesOrdered;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
