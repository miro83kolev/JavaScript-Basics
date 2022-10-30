function namesGame(input) {
    let index = 0;
    let command = input[index];
    let maxScores = Number.MIN_VALUE;
    let winnerName = "";
   
    while (command !== "Stop") {
      let currentScore = 0;
      let currName = command;
      index++;
   
      for (let i = 0; i < currName.length; i++) {
        let currNum = Number(input[index++]);
        if (currNum === currName.charCodeAt(i)) {
          currentScore += 10;
        } else {
          currentScore += 2;
        }
   
        if (currentScore >= maxScores) {
          maxScores = currentScore;
          winnerName = currName;
        }
      }
      command = input[index];
    }
    console.log(`The winner is ${winnerName} with ${maxScores} points!`);
  }

  namesGame