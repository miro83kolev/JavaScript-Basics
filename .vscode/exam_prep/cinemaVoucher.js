function cinemaVoucher(input) {
    let voucher = Number(input[0]);
    let index = 1;
    let command = input[index++];
    let boughtItems = 0;
    let boughtMovies = 0;
   
    while (command !== "End") {
      let wordLen = command.length;
      let sumLetters = 0;
   
      if (wordLen > 8) {
        sumLetters = command.charCodeAt(0) + command.charCodeAt(1);
        if (voucher >= sumLetters) {
          voucher -= sumLetters;
        } else {
          break;
        }
        boughtMovies++;
      } else {
        sumLetters = command.charCodeAt(0);
        if (voucher >= sumLetters) {
          voucher -= sumLetters;
        } else {
          break;
        }
        boughtItems++;
      }
   
      command = input[index++];
    }
    console.log(boughtMovies);
    console.log(boughtItems);
  }

cinemaVoucher(["300",
"Captain Marvel",
"popcorn",
"Pepsi"])
