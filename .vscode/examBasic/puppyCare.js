function puppyCare(input){
    let index = 0

    let boughtFoodKg = Number(input[index])
    index ++
    let foodInGrams = boughtFoodKg * 1000

    let commnad = input[index]
    index ++
    let totalFood = 0

    while(commnad !== 'Adopted'){
        let food = Number(commnad)

        totalFood += food

        commnad = input[index]
        index ++

    }

    let diff = Math.abs(foodInGrams - totalFood)

    if (totalFood <= foodInGrams){
        console.log(`Food is enough! Leftovers: ${diff} grams.`)
    }else{
        console.log(`Food is not enough. You need ${diff} grams more.`)
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



