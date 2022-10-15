function darts(input){

    let index = 0
    let playerName = input[index]
    index ++    
    let startingPoints = 301
    let counterShots = 0
    let unsuccessfulCounterShoots = 0

    let command = input[index]
    index ++    

    while (command !== 'Retire'){
        let shotType = command        
        let points = Number(input[index])
        index ++

        if (shotType === 'Single'){
            startingPoints -= points
            if (startingPoints >= 0){
                counterShots ++
            }else{
                unsuccessfulCounterShoots ++
            }
        }else if (shotType === 'Double'){
            startingPoints -= points * 2
            if (startingPoints >= 0){
                counterShots ++
            }else{
                unsuccessfulCounterShoots ++
                startingPoints += points * 2
            }
        }else if (shotType === 'Triple'){
            startingPoints -= points * 3
            if (startingPoints >= 0){
                counterShots ++
            }else{
                unsuccessfulCounterShoots ++
                startingPoints += points * 3
            }
        }
        if (startingPoints === 0){
            console.log(`${playerName} won the leg with ${counterShots} shots.`)
            break
        }

        command = input[index]
        index ++
    }

    if (command === 'Retire'){
        console.log(`${playerName} retired after ${unsuccessfulCounterShoots} unsuccessful shots.`)
    }
}

darts(["Rob Cross",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Double",
"20",
"Triple",
"20",
"Double",
"5",
"Triple",
"10",
"Double",
"6",
"Retire"])

