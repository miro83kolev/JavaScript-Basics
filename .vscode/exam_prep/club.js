function club(input){

    let index = 0
    let profit = Number(input[index])
    index ++

    let cocktail = input[index]
    index ++
    let totalPrice = 0
    let finalSum = 0

    while (cocktail !== 'Party!'){
        let currentCocktail = cocktail
        let numOfCocktails = Number(input[index])
        index ++

        let price = Number(cocktail.length)
        totalPrice = numOfCocktails * price

        if (totalPrice % 2 != 0){
            totalPrice *= 0.75
        }
        finalSum += totalPrice

        if (finalSum >= profit){
            console.log('Target acquired.')
            break
        }

        cocktail = input[index]
        index ++
    }

    if (cocktail === 'Party!'){
        let diff = (profit - finalSum)
        console.log(`We need ${diff.toFixed(2)} leva more.`)
    }
    console.log(`Club income - ${finalSum.toFixed(2)} leva.`)

}

club(["100",
"Sidecar",
"7",
"Mojito",
"5",
"White Russian",
"10"])
