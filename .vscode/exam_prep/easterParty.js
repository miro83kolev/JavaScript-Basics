function easterParty(input){

    let guests = Number(input[0])
    let entrancePrice = Number(input[1])
    let budget = Number(input[2])

    let cakePrice = budget * 0.10
    

    if (guests >= 10 && guests <= 15){
        entrancePrice *= 0.85
    }else if (guests > 15 && guests <= 20){
        entrancePrice *= 0.80
    }else if (guests > 20){
        entrancePrice *= 0.75
    }

    let finalPrice = (guests * entrancePrice) + cakePrice

    if (finalPrice <= budget){
        console.log(`It is party time! ${Math.abs(finalPrice - budget).toFixed(2)} leva left.`)
    }else{
        console.log(`No party! ${Math.abs(budget - finalPrice).toFixed(2)} leva needed.`)
    }
}

easterParty(["24",
"35",
"550"])
