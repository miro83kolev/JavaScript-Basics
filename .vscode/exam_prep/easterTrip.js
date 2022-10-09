function easterTrip(input){

    let destination = input[0]
    let dates = input[1]
    let numOfNights = Number(input[2])

    let finalPrice = 0

    switch(destination){
        case 'France':
            switch(dates){
                case '21-23':
                    finalPrice = numOfNights * 30
                    break
                case '24-27':
                    finalPrice = numOfNights * 35
                    break
                case '28-31':
                    finalPrice = numOfNights * 40
                    break
            }
            break
        case 'Italy':
            switch(dates){
                case '21-23':
                    finalPrice = numOfNights * 28
                    break
                case '24-27':
                    finalPrice = numOfNights * 32
                    break
                case '28-31':
                    finalPrice = numOfNights * 39
                    break
            }
            break
        case 'Germany':
            switch(dates){
                case '21-23':
                    finalPrice = numOfNights * 32
                    break
                case '24-27':
                    finalPrice = numOfNights * 37
                    break
                case '28-31':
                    finalPrice = numOfNights * 43
                    break
            }
            break
    }

    console.log(`Easter trip to ${destination} : ${finalPrice.toFixed(2)} leva.`)
}

easterTrip(["France",
"28-31",
"8"])

