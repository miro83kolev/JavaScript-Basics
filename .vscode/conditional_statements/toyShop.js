function toyShop(input){

    const puzzle = 2.60
    const doll = 3
    const bear = 4.10
    const minion = 8.20
    const truck = 2
    let totalCost = 0    

    let excursionPrice = Number(input[0])
    let numPuzzels = Number(input[1])
    let numDolls = Number(input[2])
    let numBears = Number(input[3])
    let numMinions = Number(input[4])
    let numTrucks = Number(input[5])

    let totalNumOfToys = numPuzzels + numDolls +numBears + numMinions + numTrucks
    totalCost = (numPuzzels * puzzle) + (numDolls * doll) + (numBears * bear) + (numMinions * minion) + (numTrucks * truck)

    if (totalNumOfToys >= 50){
        totalCost *= 0.75
    }

    let rent = totalCost * 0.10
    let finalSum = totalCost - rent

    if (finalSum >= excursionPrice){
        console.log(`Yes! ${(finalSum - excursionPrice).toFixed(2)} lv left.`)
    }else{
        console.log(`Not enough money! ${(excursionPrice - finalSum).toFixed(2)} lv needed.`)
    }

}

toyShop(["320",
"8",
"2",
"5",
"5",
"1"])

