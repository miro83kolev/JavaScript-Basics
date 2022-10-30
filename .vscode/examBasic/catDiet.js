function catDiet(input){

    let fats = Number(input[0])
    let proteins = Number(input[1])
    let carbs = Number(input[2])
    let totalCals = Number(input[3])
    let waterPer = Number(input[4])

    let totalGramsFat = (totalCals * (fats / 100)) / 9
    let totalGramsProteins = (totalCals * (proteins / 100)) / 4
    let totalGramsCarbs = (totalCals * (carbs / 100)) / 4

    let totalFood = totalGramsFat + totalGramsProteins + totalGramsCarbs
    let caloriesForGram = totalCals / totalFood
    let percentageLeft = 100 - waterPer

    let oneGramCalorie = caloriesForGram * (percentageLeft /100)

    console.log(`${oneGramCalorie.toFixed(4)}`)

}


catDiet(["20",
"60",
"20",
"1800",
"50"])
