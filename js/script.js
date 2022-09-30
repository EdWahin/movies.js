const numberOfFilms = +prompt('How many films have you seen?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('What was the last movie you watched?', ''),
          b = prompt('How much would you rate it?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log('Watched quite a few films');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('You are a classic viewer');
} else if (personalMovieDB.count >= 30) {
    console.log('You are a movie buff');
} else {
    console.log('Error');
}

console.log(personalMovieDB);