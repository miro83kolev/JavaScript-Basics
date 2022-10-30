function basket(input){
    let index = 0

    let tournament = input[index]
    index ++

    let wins = 0
    let losses = 0
    let t_wins = 0
    let t_losses = 0
    let gamesCounter = 0

    while (tournament !== 'End of tournaments'){
        games = Number(tournament)
        index ++
        count = 0

        for (i = 0; i < games; i++){
            scoreTeamOne = Number(input[index])
            scoreTeamTwo = Number(input[index])
            count ++
            gamesCounter ++

            if (scoreTeamOne > scoreTeamTwo){
                wins++
                console.log(`Game ${count} of tournament ${tournament}: win with ${scoreTeamOne - scoreTeamTwo} points.`)
            }else if(scoreTeamOne < scoreTeamTwo){
                losses++
                console.log(`Game ${count} of tournament ${tournament}: lost with ${scoreTeamTwo - scoreTeamOne} points.`)
            }
        }    
    
        tournament = input[index++]
    }

    let avgWins = wins * 1.00 / (wins + losses) * 100
    let avgLosses = losses * 1.00 / (wins + losses) * 100

    console.log(`${avgWins.toFixed(2)}% matches win`)
    console.log(`${avgLosses.toFixed(2)}% matches lost`)
}

basket(["Dunkers",
"2",
"75",
"65",
"56",
"73",
"Fire Girls",
"3",
"67",
"34",
"83",
"98",
"66",
"45",
"End of tournaments"])
