function trekking(input){

    let numberOfGroups = Number(input[0])

    let groupMusala = 0
    let groupMontBlanc = 0
    let groupKilimandjaro = 0
    let groupK2 = 0
    let groupEverest = 0

    for (let i = 1; i <= numberOfGroups; i++){
        let numberOfPeople = Number(input[i])

        if (numberOfPeople <= 5){
            groupMusala += numberOfPeople
        }else if (numberOfPeople >= 6 && numberOfPeople <= 12){
            groupMontBlanc += numberOfPeople
        }else if (numberOfPeople >= 13 && numberOfPeople <= 25){
            groupKilimandjaro += numberOfPeople
        }else if (numberOfPeople >= 26 && numberOfPeople <= 40){
            groupK2 += numberOfPeople
        }else if(numberOfPeople >= 41){
            groupEverest += numberOfPeople
        }

    }

    let totalNumberClimbers = groupMusala + groupMontBlanc + groupKilimandjaro + groupK2 + groupEverest

    let percentageMusala = (groupMusala / totalNumberClimbers) * 100
    let percentageMontBlanc = (groupMontBlanc / totalNumberClimbers) * 100
    let percentageKilimandjaro = (groupKilimandjaro / totalNumberClimbers) * 100
    let percentageK2 = (groupK2 / totalNumberClimbers) * 100
    let percentageEverest = (groupEverest / totalNumberClimbers) * 100

    console.log(`${percentageMusala.toFixed(2)}%`)
    console.log(`${percentageMontBlanc.toFixed(2)}%`)
    console.log(`${percentageKilimandjaro.toFixed(2)}%`)
    console.log(`${percentageK2.toFixed(2)}%`)
    console.log(`${percentageEverest.toFixed(2)}%`)

}

trekking(["5",
"25",
"41",
"31",
"250",
"6"])


