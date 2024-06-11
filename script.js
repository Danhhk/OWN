"use strict"

const numberOfFilms = +prompt("How many movies you've watched?", "")
    
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}


for (let i = 0; i < 2; i++) {
    const last_viewed_movie = prompt("What was the last movie you watch?", ""),
          movie_score = prompt("How much would you rate it?", "0.0")

    if (last_viewed_movie != null && movie_score != null &&
        last_viewed_movie != '' && movie_score != '' &&
        last_viewed_movie.length < 50 && movie_score.length < 10) {

        personalMovieDB.movies[last_viewed_movie] = movie_score
        console.log('done')
    } else {
        console.log('error')
        i--
    }   
}

// let i = 0 // Не работает

// while (i <= 2) {
//     const last_viewed_movie = prompt("What was the last movie you watch?", ""),
//           movie_score = prompt("How much would you rate it?", "0.0")

//     if (last_viewed_movie != null && movie_score != null &&
//         last_viewed_movie != '' && movie_score != '' &&
//         last_viewed_movie.length < 50 && movie_score.length < 10) {

//         personalMovieDB.movies[last_viewed_movie] = movie_score
//         console.log('done')
//     } else {
//         console.log('error')
//         i--
//     }
//     i++
// }

if (personalMovieDB.count < 10) {
    console.log("You've seen a lot of movies!")
} else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
    console.log("You're a cool viewer!")
} else if (personalMovieDB.count >= 30) {
    console.log("You're a movie buff!")
} else {
    console.log('Error')
}

console.log(personalMovieDB)