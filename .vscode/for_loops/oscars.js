function oscars(input){

    let nameOfActor = String(input[0])
    let accademyPoints = Number(input[1])
    let numberOfJudges = Number(input[2])

    let totalPoints =  accademyPoints

    for (i = 3; i < input.length; i += 2){
        let judgeName = String(input[i])
        let pointsGiven = Number(input[i + 1])

        let totalPointsFromJudge = (judgeName.length * pointsGiven )/ 2
        totalPoints += totalPointsFromJudge

        if (totalPoints > 1250.5){
            console.log(`Congratulations, ${nameOfActor} got a nominee for leading role with ${totalPoints.toFixed(1)}!`)
            return
        }
    }

    let neededPoints = 1250.5 - totalPoints
    console.log(`Sorry, ${nameOfActor} you need ${neededPoints.toFixed(1)} more!`)

}

oscars(["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"])

