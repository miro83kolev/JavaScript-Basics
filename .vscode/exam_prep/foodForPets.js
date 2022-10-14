function foodPets(input){

    let days = Number(input[0])
    let totalFood = Number(input[1])
    let food = totalFood
    let counterDays = 0

    let dogEatenFood = 0
    let catEatenFood = 0
    let biscuits = 0

    for (let day = 2; day < input.length; day ++){
        let dogFood = Number(input[day])
        let catFood = Number(input[day+1])
        day ++
        counterDays ++

        if (counterDays % 3 == 0){
            biscuits += Math.round((dogFood + catFood) * 0.10)         

        }
        
        food -= dogFood
        dogEatenFood += dogFood
        food -= catFood
        catEatenFood += catFood

    }

    let totalEatenFood = dogEatenFood + catEatenFood
    let percentageFromTotalFood = totalEatenFood / totalFood * 100
    let dogPercentage = dogEatenFood / totalEatenFood * 100
    let catPercentage = catEatenFood / totalEatenFood * 100

    console.log(`Total eaten biscuits: ${biscuits}gr.`)
    console.log(`${percentageFromTotalFood.toFixed(2)}% of the food has been eaten.`)
    console.log(`${dogPercentage.toFixed(2)}% eaten from the dog.`)
    console.log(`${catPercentage.toFixed(2)}% eaten from the cat.`)

}

foodPets(["3",
"500",
"100",
"30",
"110",
"25",
"120",
"35"])
