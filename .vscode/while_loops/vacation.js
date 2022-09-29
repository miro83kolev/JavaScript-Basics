function vacation(input){
    let neededMoney = Number(input[0])    
    let savedMoney = Number(input[1])
    let index = 2
    let spentDaysCounter = 0
    let daysCounter = 0

    let currentInput  = input[index]

    while(savedMoney < neededMoney){
        daysCounter ++

        if (currentInput === 'spend'){
            spentDaysCounter ++
            if (spentDaysCounter === 5){
                console.log(`You can't save the money.`)
                console.log(`${daysCounter}`)
                break
            }
            index ++
            currentInput = Number(input[index])
            savedMoney -= currentInput            

            if (savedMoney < 0){
                savedMoney = 0
            }
        }else if (currentInput === 'save'){
            index ++
            currentInput = Number(input[index])
            savedMoney += currentInput
            spentDaysCounter = 0
        }
        index ++
        currentInput = input[index]
    
    }
    if (savedMoney >= neededMoney){
        console.log(`You saved the money for ${daysCounter} days.`)
    }    
    
}

vacation(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])



