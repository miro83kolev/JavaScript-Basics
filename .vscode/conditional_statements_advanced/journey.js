function journey(input){

    let budget = Number(input[0])
    let season = input[1]

    let destination = ""
    let placeToStay = ""
    let finalSum = 0

    if (budget <= 100){
        if (season == 'summer'){
            destination = 'Bulgaria'
            placeToStay = 'Camp'
            finalSum = budget * 0.30
        }else if (season == 'winter'){
            destination = 'Bulgaria'
            placeToStay = 'Hotel'
            finalSum = budget * 0.70
        }
    }else if (budget <= 1000){
        if (season == 'summer'){
            destination = 'Balkans'
            placeToStay = 'Camp'
            finalSum = budget * 0.40
        }else if (season == 'winter'){
            destination = 'Balkans'
            placeToStay = 'Hotel'
            finalSum = budget * 0.80
        }
    }else if (budget > 1000){
        finalSum = budget * 0.90
        destination = 'Europe'
        placeToStay = 'Hotel'
    }
    console.log(`Somewhere in ${destination}`)
    console.log(`${placeToStay} - ${(finalSum).toFixed(2)}`)
}

journey(["1500", "summer"])