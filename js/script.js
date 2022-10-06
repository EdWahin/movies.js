"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('How many films have you seen?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many films have you seen?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('What was the last movie you watched?', '').trim(),
                  b = prompt('How much would you rate it?', '');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Watched quite a few films');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('You are a classic viewer');
        } else if (personalMovieDB.count >= 30) {
            console.log('You are a movie buff');
        } else {
            console.log('Error');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function(DB) {
        if (DB.privat) {
            DB.privat = false;
        } else {
            DB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 2; i++) {
            // let genre = prompt(`Your favorite genre at number ${i}`);

            // if (genre == '' || genre == null) {
            //     console.log('You entered not correct data');
            //     i--;
            // } else {
            //     personalMovieDB.genres[i - 1] = genre;
            // }

            let genres = prompt(`Enter your favorite genres with a comma`).toLowerCase();

            if (genres == '' || genres == null) {
                console.log('You entered not correct data');
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Favorite genre #${i + 1} is - ${item}\n`);
        });
    }
};
personalMovieDB.start();

personalMovieDB.rememberMyFilms();

personalMovieDB.detectPersonalLevel();

// personalMovieDB.toggleVisibleMyDB(personalMovieDB);

personalMovieDB.showMyDB(personalMovieDB.privat);

personalMovieDB.writeYourGenres();