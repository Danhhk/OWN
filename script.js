const numberOfFilms = +prompt("How many movies you've seen?", "0")

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

const last_viewed_movie01 = prompt("What was the last movie you saw?", ""),
      movie_score01 = prompt("How much would you rate it?", "0.0"),
      last_viewed_movie02 = prompt("What was the last movie you saw?", ""),
      movie_score02 = prompt("How much would you rate it?", "0.0")

personalMovieDB.movies[last_viewed_movie01] = movie_score01
personalMovieDB.movies[last_viewed_movie02] = movie_score02

console.log(personalMovieDB)