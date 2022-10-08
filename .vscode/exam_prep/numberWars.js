function numberWars(input){

    let firstName = input[0]
    let secondName = input[1]

    let index = 2
    let command = input[index]
    index ++

    let playerOneResult = 0
    let playerTwoResult = 0

    while (command !== 'End of game'){
        let firstPlayerCard = Number(command)        
        let secondPlayerCard = Number(input[index])
        index ++
        
        if (firstPlayerCard > secondPlayerCard){
            playerOneResult += (firstPlayerCard - secondPlayerCard)
        }

        if (secondPlayerCard > firstPlayerCard){
            playerTwoResult += (secondPlayerCard - firstPlayerCard)
        }

        if (firstPlayerCard == secondPlayerCard){
            console.log(`Number wars!`)
            firstPlayerCard = Number(input[index])
            index ++
            secondPlayerCard = Number(input[index])
            index ++

            if (firstPlayerCard > secondPlayerCard){
                console.log(`${firstName} is winner with ${playerOneResult} points`)
                break
            }
            if (secondPlayerCard > firstPlayerCard){
                console.log(`${secondName} is winner with ${playerTwoResult} points`)
                break
            }
        }

        command = input[index]
        index ++
    }

    if (command === 'End of game'){
        console.log(`${firstName} has ${playerOneResult} points`)
        console.log(`${secondName} has ${playerTwoResult} points`)
    }
}

numberWars(["Aleks",
"Georgi",
"4",
"5",
"3",
"2",
"4",
"3",
"4",
"4",
"5",
"2"])
