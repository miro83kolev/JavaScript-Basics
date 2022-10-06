function easterComp(input){

    let easterBreadCount = Number(input[0])
    let bakerName = ''
    let grade = ''
    let bestName = ''
    let gradeCount = 0
    let maxGrade = 0
    let index = 1

    for (let i = 1; i <= easterBreadCount; i++){
        bakerName = input[index]
        index ++
        grade = input[index]

        while (grade !== 'Stop'){
            gradeCount += Number(grade)
            index ++
            grade = input[index]
        }

        if (grade === 'Stop'){
            index ++
            console.log(`${bakerName} has ${gradeCount} points.`)
            if (gradeCount > maxGrade){
                bestName = bakerName
                maxGrade = gradeCount
                console.log(`${bakerName} is the new number 1!`)
            }
            gradeCount = 0
        }
    }

    console.log(`${bestName} won competition with ${maxGrade} points!`)

}

easterComp(["2",
"Chef Angelov",
"9",
"9",
"9",
"Stop",
"Chef Rowe",
"10",
"10",
"10",
"10",
"Stop"])

