function poolDay(input){

    let numberOfPeople = Number(input[0])
    let entracePrice = Number(input[1])
    let sunBedPrice = Number(input[2])
    let sunUnbrellaPrice = Number(input[3])

    let finalSumEntrance = numberOfPeople * entracePrice
    let finalSumSunBeds = Math.ceil(numberOfPeople * 0.75) * sunBedPrice
    let finalSumSunUnbrellas = Math.ceil(numberOfPeople * 0.50) * sunUnbrellaPrice

    let finalSum = finalSumEntrance + finalSumSunBeds + finalSumSunUnbrellas

    console.log(`${finalSum.toFixed(2)} lv.`)

}

poolDay(["100",
"8",
"6",
"4"])
