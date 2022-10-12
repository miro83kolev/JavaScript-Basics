function moviePrem(input){

    let movieName = input[0]
    let moviePack = input[1]
    let numOfTickets = Number(input[2])

    let finalPrice = 0

    switch (movieName){
        case 'John Wick':
            switch (moviePack){
                case 'Drink':
                    finalPrice = numOfTickets * 12
                    break
                case 'Popcorn':
                    finalPrice = numOfTickets * 15
                    break
                case 'Menu':
                    finalPrice = numOfTickets * 19
                    break

            }
            break
        case 'Star Wars':
            switch (moviePack){
                case 'Drink':
                    finalPrice = numOfTickets * 18
                    if (numOfTickets >= 4){
                        finalPrice *= 0.70
                    }
                    break
                case 'Popcorn':
                    finalPrice = numOfTickets * 25
                    if (numOfTickets >= 4){
                        finalPrice *= 0.70
                    }
                    break
                case 'Menu':
                    finalPrice = numOfTickets * 30
                    if (numOfTickets >= 4){
                        finalPrice *= 0.70
                    }                    
                    break
            }
            break
        case 'Jumanji':
            switch (moviePack){
                case 'Drink':
                    finalPrice = numOfTickets * 9
                    if (numOfTickets == 2){
                        finalPrice *= 0.85
                    }
                    break
                case 'Popcorn':
                    finalPrice = numOfTickets * 11
                    if (numOfTickets == 2){
                        finalPrice *= 0.85
                    }
                    break
                case 'Menu':
                    finalPrice = numOfTickets * 14
                    if (numOfTickets == 2){
                        finalPrice *= 0.85
                    }                    
                    break
            }
            break
    }
    console.log(`Your bill is ${finalPrice.toFixed(2)} leva.`)
}

moviePrem(["Jumanji",
"Menu",
"2"])
