# Sprint 3 IT Academy | Video Management Tool

## Introduction

A company in the audiovisual sector has requested a web application to help their employees quickly find movies from their extensive database, which is currently managed manually.

You are tasked with setting up the core of the application, focusing on the logic for filtering and sorting movies. You have 2 weeks to complete this task, which coincides with the duration of this sprint.

### Frontend Requirements

- Implement all loops in ES6 (use `map`, `reduce`, `filter`, and `sort` to manipulate arrays).
- As we are not yet consuming data from a server API, use the data from the `src/data.js` file. For now, we will work with an array of around 250 movies.
- The implementation involves processing this array of movies to meet the requirements of each exercise.
- Place all logic implementations in the `src/films.js` file.
- You do not need to display the results of each function on the screen; your goal is to pass the tests. More information on test-driven development is provided at the end of this document.
- Remember to upload the test results screenshot to the virtual campus.

<br>

## Objectives

- Understand and practice using ES6 methods: `map`, `reduce`, `filter`, and `sort`.
- Create Unit Tests.
- Learn to manipulate a dataset.

<br>

## Exercises

1. **Function `getAllDirectors()`**
2. **Function `getMoviesFromDirector()`**
3. **Function `moviesAverageOfDirector()`**
4. **Sort the first 20 movies alphabetically**
5. **Sort the movies by year and if they coincide by year, sort them alphabetically**
6. **Calculate the average movie rating and create a unit test for it**
7. **Convert the movie duration to minutes**
8. **Find the best film of every year**

<br>

## Running Tests

```shell
$ npm install
$ npm run test:watch
```

And last, open the generated `test-results.html` file with the "Live Server" VSCode extension to see test results.

Apart from the statement, you will know exactly what you are asked to do by looking at the file `tests/films.spec.js`, all tests are already defined here!

<br>

## Test passed:

<div style="display: flex; justify.content: center; max-width: 1000px; margin:auto">
<img src='./tests/Captura de pantalla 2024-05-24 a las 18.32.55.png' alt='Succesful test'>
</div>

<br>

## Author

- **Lucía Mª Ordoñez Vilanova** - _React, It Academy_.

<br>

## License

This project is based on the starter code provided by [starter-code-frontend-sprint-3-movies](https://github.com/IT-Academy-BCN/starter-code-frontend-sprint-3-movies), which is part of the IT Academy curriculum.