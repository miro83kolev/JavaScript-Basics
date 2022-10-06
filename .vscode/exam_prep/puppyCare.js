function puppyCare(input){

    let foodInGrams = Number(input[0]) * 1000
    let index = 1
    let daylyFood = input[index]
    let foodNeeded = 0

    while (daylyFood !== 'Adopted'){
        foodNeeded += Number(daylyFood)
        index ++
        daylyFood = input[index]

    }

    if (foodNeeded <= foodInGrams){
        console.log(`Food is enough! Leftovers: ${foodInGrams - foodNeeded} grams.`)
    }else{
        console.log(`Food is not enough. You need ${foodNeeded - foodInGrams} grams more.`)
    }

}

puppyCare(["2",
"999",
"456",
"999",
"999",
"123",
"456",
"Adopted"])
