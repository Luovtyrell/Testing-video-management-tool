// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  let result = movies.map(movie => movie.director)
  console.log("EXERCISE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  let moviesFromDirector = movies.filter(movie => movie.director === director)
  console.log("EXERCISE 2 ->", moviesFromDirector);
  return moviesFromDirector;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
  const moviesFromDirector = getMoviesFromDirector(movies, director)

  let totalScore = moviesFromDirector.reduce((sum, movie) => sum + movie.score, 0)
  let averageScore = totalScore / moviesFromDirector.length
  console.log("EXERCISE 3 ->", averageScore.toFixed(2));
  return parseFloat(averageScore.toFixed(2));
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  let moviesOrdered = movies.map((movie) => movie.title).sort().slice(0, 20)
  console.log("EXERCISE 4 ->", moviesOrdered);
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
function moviesAverageByCategory(movies, genre) {
  let moviesByCategory = movies.filter((movie) => movie.genre.includes(genre))
  let totalScoreByCategory = moviesByCategory.reduce((sum, movie) => sum + movie.score, 0)
  let averageScoreByCategory = totalScoreByCategory / moviesByCategory.length
  console.log("EXERCISE 6 ->", averageScoreByCategory.toFixed(2));
  return parseFloat(averageScoreByCategory.toFixed(2));
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
  let updatedMovies = movies.map(movie => {
    let splitHoursMin = movie.duration.split(' ')
    let totalMinutes = 0

    if (splitHoursMin.length === 2) {
      const hours = parseInt(splitHoursMin[0])
      const minutes = parseInt(splitHoursMin[1])
      totalMinutes = (hours * 60) + minutes

    } else if (splitHoursMin[0].includes('h')) {
      const hours = parseInt(splitHoursMin[0])
      totalMinutes = hours * 60

    } else {
      const minutes = parseInt(splitHoursMin[0])
      totalMinutes = minutes
    }

    return {
      ...movie,
      duration: totalMinutes
    }
  })

  console.log("EXERCISE 7 ->", updatedMovies);
  return updatedMovies;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies, year) {
  let movieYear = movies.filter((movie) => movie.year === year)
  let bestMovie = movieYear.reduce((prev, current) => (prev.score > current.score) ? prev : current)

  console.log("EXERCISE 8 ->", [bestMovie]);
  return [bestMovie];
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
