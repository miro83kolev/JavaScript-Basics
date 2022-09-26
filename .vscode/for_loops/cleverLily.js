function cleverLily(input){

    let years = Number(input[0])
    let washingMachinePrice = Number(input[1])
    let toysPrice = Number(input[2])

    let countToys = 0
    let money = 0
    let takenMoney = 0
    let finalBudget = 0
    let moneyBonus = 10

    for (let i = 1; i <= years; i++){
        if (i % 2 == 0){
            money += moneyBonus
            takenMoney += 1
            moneyBonus += 10       
            
        }else{
            countToys += 1
        }
    }
    finalBudget = money + (countToys * toysPrice) - takenMoney

    if (finalBudget >= washingMachinePrice){
        console.log(`Yes! ${(finalBudget - washingMachinePrice).toFixed(2)}`)    
    }else{
        console.log(`No! ${(washingMachinePrice - finalBudget).toFixed(2)}`)
    }
}

cleverLily(["21",
"1570.98",
"3"])
