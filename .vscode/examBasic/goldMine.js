function gold(input){

    let index = 0
    let locations = Number(input[index])
    index ++

    for (let l = 0; l < locations; l++){
        let expectedMining = Number(input[index])
        index ++
        let days = Number(input[index])
        index ++
        let mining = 0

        for (let d = 0; d < days; d++){
            let currentMining = Number(input[index])
            index ++
            mining += currentMining
        }

        let avgPerLocation = mining / days
        let diff = Math.abs(avgPerLocation - expectedMining)

        if (avgPerLocation < expectedMining){
            console.log(`You need ${diff.toFixed(2)} gold.`)
        }else{
            console.log(`Good job! Average gold per day: ${avgPerLocation.toFixed(2)}.`)
        }
    }
}

gold(["1",
"5",
"3",
"10",
"1",
"3"])
