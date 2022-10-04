function traning(input){
    let index = 0
    let people = Number(input[index])
    index ++

    let command = input[index]
    index ++

    let sumGrade = 0
    let counter = 0

    while (command !== 'Finish'){
        let name = command
        counter ++
        let tempGrade = 0

        for (let i = 0; i < people; i ++){
            let grade = Number(input[index])
            index ++
            tempGrade += grade
        }
        let tempAvgGrade = tempGrade / people
        sumGrade += tempAvgGrade
        console.log(`${name} - ${tempAvgGrade.toFixed(2)}.`)
        command = input[index]
        index ++
    }
    let avgGrade = sumGrade / counter
    console.log(`Student's final assessment is ${avgGrade.toFixed(2)}.`)
}

traning(["3",
"Arrays",
"4.53",
"5.23",
"5.00",
"Lists",
"5.83",
"6.00",
"5.42",
"Finish"])

