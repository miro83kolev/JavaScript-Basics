function footballTournament(input){

    let index = 0
    let footballTeamName = input[index]
    index ++
    let games = Number(input[index])
    index ++
    let points = 0
    let wins = 0
    let draws = 0
    let lost = 0

    for (let i = 0; i < games; i ++){
        let result = input[index]
        index ++
        
        if (result === 'W'){
            wins ++
            points += 3
        }else if (result === 'D'){  
            draws ++
            points += 1
        }else if(result === 'L'){
            lost ++
        }        
       
    }
    if (games == 0){
        console.log(`${footballTeamName} hasn't played any games during this season.`)          
    }else{
        let winRate = wins / games * 100
        console.log(`${footballTeamName} has won ${points} points during this season.`)
        console.log(`Total stats:`)
        console.log(`## W: ${wins}`)
        console.log(`## D: ${draws}`)
        console.log(`## L: ${lost}`)
        console.log(`Win rate: ${winRate.toFixed(2)}%`)
    }   
}

footballTournament(["Barcelona",
"7",
"W",
"D",
"L",
"L",
"W",
"W",
"D"])



