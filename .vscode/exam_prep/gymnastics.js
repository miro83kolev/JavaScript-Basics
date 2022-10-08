function gymnastics(input){

    let country = input[0]
    let tool = input[1]

    const maxPoints = 20
    let finalScore = 0
    let leftToMaxScore = 0
    let percentage = 0

    switch (country){
        case 'Russia':
            switch (tool){
                case 'ribbon':
                    finalScore = 9.100 + 9.400
                    leftToMaxScore = maxPoints - finalScore
                    percentage = (leftToMaxScore / maxPoints) * 100
                    break
                case 'hoop':
                    finalScore = 9.300 + 9.800
                    leftToMaxScore = maxPoints - finalScore
                    percentage = (leftToMaxScore / maxPoints) * 100
                    break
                case 'rope':
                    finalScore = 9.600 + 9.000
                    leftToMaxScore = maxPoints - finalScore
                    percentage = (leftToMaxScore / maxPoints) * 100
                    break
            }
            break
        case 'Bulgaria': 
            switch (tool){
                case 'ribbon':
                    finalScore = 9.600 + 9.400
                    leftToMaxScore = maxPoints - finalScore
                    percentage = (leftToMaxScore / maxPoints) * 100
                    break
                case 'hoop':
                    finalScore = 9.550 + 9.750
                    leftToMaxScore = maxPoints - finalScore
                    percentage = (leftToMaxScore / maxPoints) * 100
                    break
                case 'rope':
                    finalScore = 9.500 + 9.400
                    leftToMaxScore = maxPoints - finalScore
                    percentage = (leftToMaxScore / maxPoints) * 100
                    break
            }
            break
        case 'Italy':
            switch (tool){
                case 'ribbon':
                    finalScore = 9.200 + 9.500
                    leftToMaxScore = maxPoints - finalScore
                    percentage = (leftToMaxScore / maxPoints) * 100
                    break
                case 'hoop':
                    finalScore = 9.450 + 9.350
                    leftToMaxScore = maxPoints - finalScore
                    percentage = (leftToMaxScore / maxPoints) * 100
                    break
                case 'rope':
                    finalScore = 9.700 + 9.150
                    leftToMaxScore = maxPoints - finalScore
                    percentage = (leftToMaxScore / maxPoints) * 100
                    break
            }

            break
    }
    console.log(`The team of ${country} get ${finalScore.toFixed(3)} on ${tool}.`)
    console.log(`${percentage.toFixed(2)}%`)

}

gymnastics(["Russia",
"rope"])



