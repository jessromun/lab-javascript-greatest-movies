
  // Iteration 1: All directors? - Get the array of all directors.

 function getAllDirectors(arr){
    return arr.map(ele => ele.director);
  }
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies (arr){
    return (arr.filter(director => director.director === "Steven Spielberg")
    .filter(steven => {
        for (genre of steven.genre){
            if ( genre === "Drama"){
                return true;
            }
        }
return false;

    }).length

    )  
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr) {
    if (!arr.length) return 0;

    return (Math.round(arr.reduce((acc, cv) => {
        if (!cv.rate) return acc;

        return acc + cv.rate;
    }, 0) / arr.length * 100) / 100);
}


// Iteration 4: Drama movies - Get the average of Drama Movies
let dramaMovies = arr.filter(drama => drama.genre ==="Drama")
function dramaMoviesRate(arr) {
    if (!arr.length) return 0;
   return (Math.round(arr.reduce((acc, cv) => {
        if (!cv.rate) return acc; 
         return acc + cv.rate;
    }, 0) / arr.length * 100) / 100);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
