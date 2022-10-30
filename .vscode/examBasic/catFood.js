function catFood(input){

    let index = 0
    let numOfCats = Number(input[index])
    index ++

    const pricePerKg = 12.45
    let catGroup1 = 0
    let catGroup2 = 0
    let catGroup3 = 0
    let totalGrams = 0

    for (let cat = 1; cat <= numOfCats; cat++){
        let gramFood = Number(input[index])
        index ++

        if (gramFood >= 100 && gramFood < 200){
            catGroup1 ++
            totalGrams += gramFood
        }
        if (gramFood >= 200 && gramFood < 300){
            catGroup2++
            totalGrams += gramFood
        }
        if (gramFood >= 300 && gramFood < 400){
            catGroup3++
            totalGrams += gramFood
        }
    }

    let finalPrice = (totalGrams / 1000) * pricePerKg

    console.log(`Group 1: ${catGroup1} cats.`)
    console.log(`Group 2: ${catGroup2} cats.`)
    console.log(`Group 3: ${catGroup3} cats.`)
    console.log(`Price for food per day: ${finalPrice.toFixed(2)} lv.`)
}

catFood(["7",
"100",
"200",
"342",
"300",
"234",
"123",
"212"])

