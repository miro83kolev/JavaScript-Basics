function fishingBoat(input){

    let budget = Number(input[0])
    let season = input[1]
    let numberOfFishermen = Number(input[2])

    const rentSpring = 3000
    const rentSummerAutumn = 4200
    const rentWinter = 2600

    let finalSum = 0

    if (numberOfFishermen <= 6){

        if (season == "Spring"){
            finalSum = rentSpring * 0.90
        }else if (season == "Summer" || season == "Autumn"){
            finalSum = rentSummerAutumn * 0.90
        }else if (season == "Winter"){
            finalSum = rentWinter * 0.90
        }
    }else if (numberOfFishermen >= 7 && numberOfFishermen <= 11){
        if (season == "Spring"){
            finalSum = rentSpring * 0.85
        }else if (season == "Summer" || season == "Autumn"){
            finalSum = rentSummerAutumn * 0.85
        }else if (season == "Winter"){
            finalSum = rentWinter * 0.85
        }
    }else if (numberOfFishermen >= 12){
        if (season == "Spring"){
            finalSum = rentSpring * 0.75
        }else if (season == "Summer" || season == "Autumn"){
            finalSum = rentSummerAutumn * 0.75
        }else if (season == "Winter"){
            finalSum = rentWinter * 0.75
        }
    }

    if (numberOfFishermen % 2 == 0 && season != "Autumn" ){
        finalSum = finalSum * 0.95
    }

    if (budget >= finalSum){
        console.log(`Yes! You have ${(budget - finalSum).toFixed(2)} leva left.`)
    }
    else{
        console.log(`Not enough money! You need ${(finalSum - budget).toFixed(2)} leva.`)
    }
}

fishingBoat(["6000",
"Summer",
"11"])

