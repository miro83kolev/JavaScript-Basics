function godzilla(input){

    let movieBudget = Number(input[0])
    let movieStuntmen = Number(input[1])
    let priceCloths = Number(input[2])    

    let decorPrice = movieBudget * 0.10
    let amountCloths = movieStuntmen * priceCloths

    if (movieStuntmen > 150){        
        amountCloths *= 0.90
    }

    let totalSum = decorPrice + amountCloths

    let diff = Math.abs(movieBudget - totalSum)

    if (totalSum <= movieBudget){
        console.log('Action!')
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`)
    }else{
        console.log('Not enough money!')
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`)
    }
}

godzilla(["9587.88",
"222",
"55.68"])
