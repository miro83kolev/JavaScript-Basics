function familyTrip(input){

    let budget = Number(input[0])
    let nights = Number(input[1])
    let pricePerNight = Number(input[2])
    let addExpencesPercentage = Number(input[3])

    if (nights > 7){
        pricePerNight = pricePerNight * 0.95
    }

    let finalSumNights = pricePerNight * nights
    let additionalExpences = budget * (addExpencesPercentage / 100)
    let finalSum = finalSumNights + additionalExpences

    if (finalSum <= budget){
        console.log(`Ivanovi will be left with ${(budget - finalSum).toFixed(2)} leva after vacation.`)
    }else{
        console.log(`${(finalSum - budget).toFixed(2)} leva needed.`)
    }
}

familyTrip(["800.50",
"8",
"100",
"2"])
