function examPrep(input){
    let index = 0

    let negativeCountNumber = Number(input[index])
    index ++

    let command = input[index]
    index ++

    let negativeCount = 0
    let sumOfGrades = 0
    let coundOfProblems = 0
    let taskName = ''
    let breakNeeded = false

    while (command !== 'Enough'){
        taskName = command
        let nextGrade = Number(input[index])
        index ++
        coundOfProblems++
        sumOfGrades += nextGrade

        if (nextGrade <= 4.00){
            negativeCount ++
            if (negativeCount === negativeCountNumber){
                breakNeeded = true
                break;
            }
        
        }                

        command = input[index]
        index ++
    }

    let avg = sumOfGrades / coundOfProblems
    if (breakNeeded){
        console.log(`You need a break, ${negativeCount} poor grades.`)
    }else{
        console.log(`Average score: ${avg.toFixed(2)}`)
        console.log(`Number of problems: ${coundOfProblems}`)
        console.log(`Last problem: ${taskName}`)
    }
    
}

examPrep(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])

