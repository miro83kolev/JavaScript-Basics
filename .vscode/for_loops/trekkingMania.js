function trekkingMania(input){
    let group1 = 0
    let group2 = 0
    let group3 = 0
    let group4 = 0
    let group5 = 0
    let totalClimbers = 0

    let numberOfGroups = Number(input[0])    

    for (i = 1; i <= numberOfGroups; i++){
        let numberOfClimbers = Number(input[i])

        if (numberOfClimbers <= 5){
            group1 += numberOfClimbers
            totalClimbers += numberOfClimbers
        }else if (numberOfClimbers >= 6 && numberOfClimbers <= 12){
            group2 += numberOfClimbers
            totalClimbers += numberOfClimbers
        }else if (numberOfClimbers >= 13 && numberOfClimbers <= 25){
            group3 += numberOfClimbers
            totalClimbers += numberOfClimbers
        }else if (numberOfClimbers >= 26 && numberOfClimbers <= 40){
            group4 += numberOfClimbers
            totalClimbers += numberOfClimbers
        }else if (numberOfClimbers >= 41){
            group5 += numberOfClimbers
            totalClimbers += numberOfClimbers
        }

    }

    let group1Percentrage = (group1 / totalClimbers )* 100
    let group2Percentrage = (group2 / totalClimbers )* 100
    let group3Percentrage = (group3 / totalClimbers )* 100
    let group4Percentrage = (group4 / totalClimbers )* 100
    let group5Percentrage = (group5 / totalClimbers )* 100

    console.log(`${group1Percentrage.toFixed(2)}%`)
    console.log(`${group2Percentrage.toFixed(2)}%`)
    console.log(`${group3Percentrage.toFixed(2)}%`)
    console.log(`${group4Percentrage.toFixed(2)}%`)
    console.log(`${group5Percentrage.toFixed(2)}%`)

}

trekkingMania(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])


