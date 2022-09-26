function tennisRanklist(input){

    let numberOfTournaments = Number(input.shift())
    let startingPoints = Number(input.shift())

    let totalPoints = startingPoints
    let wonTournaments = 0
    let tournamentPoints = 0

    for (i= 0; i < numberOfTournaments; i++){
        stage = String(input[i])

        if (stage == 'W'){
            wonTournaments ++
            totalPoints += 2000
            tournamentPoints += 2000
        }else if (stage == 'F'){
            totalPoints += 1200
            tournamentPoints += 1200
        }else if (stage == 'SF'){
            totalPoints += 720
            tournamentPoints +=720
        }
    }

    let averagePoints = Math.floor(tournamentPoints / numberOfTournaments)
    let averagePercentage = Number((wonTournaments / numberOfTournaments) * 100)

  

    console.log(`Final points: ${totalPoints}`)
    console.log(`Average points: ${averagePoints}`)
    console.log(`${averagePercentage.toFixed(2)}%`)
}

tennisRanklist(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"])

