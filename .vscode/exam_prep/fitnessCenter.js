function fitnessCenter(input){

    let index = 0

    let numOfPeople = Number(input[index])
    index ++

    let trainingBack = 0
    let trainingChest = 0
    let trainingLegs = 0
    let trainingAbs = 0
    let buyingProteinShake = 0
    let buyingProteinBar = 0
    let totalTrainingPeople = 0
    let totalPeopleProtein = 0


    for (let i = 0; i < numOfPeople; i++){
        let action = input[index]
        index ++

        if (action === 'Back'){
            trainingBack ++
            totalTrainingPeople ++
        }else if (action === 'Chest'){
            trainingChest ++
            totalTrainingPeople ++
        }else if (action === 'Legs'){
            trainingLegs ++
            totalTrainingPeople ++
        }else if (action === 'Abs'){
            trainingAbs ++
            totalTrainingPeople ++
        }else if (action === 'Protein shake'){
            buyingProteinShake ++
            totalPeopleProtein ++
        }else if (action === 'Protein bar'){
            buyingProteinBar ++
            totalPeopleProtein ++
        }
    }

    let avgPeopleTraining = totalTrainingPeople / numOfPeople * 100
    let peoplePerProtein = totalPeopleProtein / numOfPeople * 100

    console.log(`${trainingBack} - back`)
    console.log(`${trainingChest} - chest`)
    console.log(`${trainingLegs} - legs`)
    console.log(`${trainingAbs} - abs`)
    console.log(`${buyingProteinShake} - protein shake`)
    console.log(`${buyingProteinBar} - protein bar`)
    console.log(`${avgPeopleTraining.toFixed(2)}% - work out`)
    console.log(`${peoplePerProtein.toFixed(2)}% - protein`)

}

fitnessCenter(["7",
"Chest",
"Back",
"Legs",
"Legs",
"Abs",
"Protein shake",
"Protein bar"])
