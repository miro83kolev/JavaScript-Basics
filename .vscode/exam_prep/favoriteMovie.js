function favoriteMovie(input) {
    let index = 0;
    let command = input[index++];
    let points = 0;
    let bestMovie = "";
    let countMovies = 0;
   
    while (command !== "STOP") {
      countMovies++;
      let currentMovie = command;
      let sumMovieName = 0;
   
      for (let i = 0; i < currentMovie.length; i++) {
        let currLetter = currentMovie.charCodeAt(i);
        if (currLetter >= 97 && currLetter <= 122) {
          currLetter -= currentMovie.length + currentMovie.length;
        } else if (currLetter >= 65 && currLetter <= 90) {
          currLetter -= currentMovie.length;
        }
   
        sumMovieName += currLetter;
   
        if (sumMovieName > points) {
          points = sumMovieName;
          bestMovie = currentMovie;
        }
      }
   
      if (countMovies >= 7) {
        console.log("The limit is reached.");
        break;
      }
   
      command = input[index++];
    }
   
    console.log(
      `The best movie for you is ${bestMovie} with ${points} ASCII sum.`
    );
  }

favoriteMovie(["Matrix",
"Breaking bad",
"Legend",
"STOP"])
