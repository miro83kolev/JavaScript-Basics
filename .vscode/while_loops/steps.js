function steps(input){

    let index = 0
    let totalSteps = 0

    let command = input[index]
    index ++

    while (command !== 'Going home'){
        let stepsCount = Number(command)
        totalSteps += stepsCount

        if (totalSteps >= 10000){
            console.log(`Goal reached! Good job!`)
            console.log(`${totalSteps - 10000} steps over the goal!`)
            break
        }
        command = input[index]
        index ++
    }

    if (command === 'Going home'){

        let stepsAfter = Number(input[index])
        totalSteps += stepsAfter

        if (totalSteps >= 10000){
            console.log(`Goal reached! Good job!`)
            console.log(`${totalSteps - 10000} steps over the goal!`)            
        }else{
            console.log(`${10000 - totalSteps} more steps to reach goal.`)
        }

    }
}



steps(["125",
"250",
"4000",
"30",
"2678",
"4682"])
