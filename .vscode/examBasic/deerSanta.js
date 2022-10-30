function deerSanta(input){

    let vacDays = Number(input[0])
    let foodLeft = Number(input[1])
    let foodDeerOneKg = Number(input[2])
    let foodDeerTwoKg = Number(input[3])
    let foodDeerThreeKg = Number(input[4])

    let foodNeededDeerOne = vacDays * foodDeerOneKg
    let foodNeededDeerTwo = vacDays * foodDeerTwoKg
    let foodNeededDeerThree= vacDays * foodDeerThreeKg

    let totalFoodNeeded = foodNeededDeerOne + foodNeededDeerTwo + foodNeededDeerThree

    if (totalFoodNeeded <= foodLeft){
        let diff = Math.floor(foodLeft - totalFoodNeeded)
        console.log(`${diff} kilos of food left.`)
    }else{
        diff = Math.ceil(totalFoodNeeded - foodLeft)
        console.log(`${diff} more kilos of food are needed.`)
    }    

}

deerSanta(["5",
"10",
"2.1",
"0.8",
"11"])
