function godzillaVsKingKong(input){

    let budget = Number(input[0])
    let workers = Number(input[1])
    let priceCloths = Number(input[2])

    let decor = budget * 0.10
    let sumCloths = workers * priceCloths

    if (workers > 150){
        sumCloths *= 0.90
    }

    let finalSum = decor + sumCloths

    if (finalSum <= budget){
        console.log('Action!')
        console.log(`Wingard starts filming with ${(budget - finalSum).toFixed(2)} leva left.`)        
    }else{
        console.log('Not enough money!')
        console.log(`Wingard needs ${(finalSum - budget).toFixed(2)} leva more.`)
    }
}

godzillaVsKingKong(["9587.88",
"222",
"55.68"])
