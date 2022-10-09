function easterEggBattle(input){

    let eggsFirstPlayer = Number(input[0])
    let eggsSecondPlayer = Number(input[1])

    let index = 2

    let command = input[index]
    index ++

    while (command !== 'End'){
        let move = command

        if (eggsFirstPlayer == 0){
            console.log(`Player one is out of eggs. Player two has ${eggsSecondPlayer} eggs left.`)
            break
        }

        if (eggsSecondPlayer == 0){
            console.log(`Player two is out of eggs. Player one has ${eggsFirstPlayer} eggs left.`)
            break
        }

        if (move == 'one'){
            eggsSecondPlayer -= 1
        }else if(move == 'two'){
            eggsFirstPlayer -= 1
        }

        command = input[index]
        index ++
    }

    if (command == 'End'){
        console.log(`Player one has ${eggsFirstPlayer} eggs left.`)
        console.log(`Player two has ${eggsSecondPlayer} eggs left.`)
    }
}

easterEggBattle(['6',
    '3',
    'one',
    'two',
    'two',
    'one',
    'one'    
    ])