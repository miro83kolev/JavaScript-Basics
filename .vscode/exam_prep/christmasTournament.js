function tournament(input){
    let index = 0
    let day = Number(input[index])
    index ++

    let winCount = 0
    let lostCount = 0
    let money =0

    for (let i = 0; i < day; i++){
        let command = input[index]
        index ++
        let tempMoney = 0
        let tempWinCount = 0
        let tempLostCount = 0

        while (command !== 'Finish'){
            let name = command
            let result = input[index]
            index ++

            switch(result){
                case 'win':
                    tempWinCount ++
                    tempMoney += 20
                    break

                case 'lose':
                    tempLostCount ++
                    break
            }
            command = input[index]
            index ++
        }

        if (tempWinCount > tempLostCount){
            tempMoney *= 1.10
            winCount ++
        }else{
            lostCount ++
        }
        money += tempMoney

    }

    if (winCount > lostCount){
        money *= 1.20
        console.log(`You won the tournament! Total raised money: ${money.toFixed(2)}`)
    }else{
        console.log(`You lost the tournament! Total raised money: ${money.toFixed(2)}`)
    }

}

tournament(["2",
"volleyball",
"win",
"football",
"lose",
"basketball",
"win",
"Finish",
"golf",
"win",
"tennis",
"win",
"badminton",
"win",
"Finish"])
