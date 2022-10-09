function safari(input){

    let budget  = Number(input[0])
    let fuelLitters = Number(input[1])
    let day = input[2]

    let fuelPrice = fuelLitters * 2.10
    let finalSum = 100 + fuelPrice

    if(day == 'Saturday'){
        finalSum *= 0.90
    }else if (day == 'Sunday'){
        finalSum *= 0.80
    }

    if (finalSum <= budget){
        console.log(`Safari time! Money left: ${Math.abs(budget - finalSum).toFixed(2)} lv. `)
    }else{
        console.log(`Not enough money! Money needed: ${Math.abs(finalSum - budget).toFixed(2)} lv.`)
    }
}

safari(["105.20",
"15",
"Sunday"])
