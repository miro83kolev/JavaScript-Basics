function movieDest(input){

    let budget = Number(input[0])
    let destination = input[1]
    let season = input[2]
    let days = Number(input[3])

    let finalSum = 0

    switch (season){
        case 'Summer':
            switch (destination){
                case 'Dubai':
                    finalSum = days * 40000
                    finalSum *= 0.70
                    break
                case 'Sofia':
                    finalSum = days * 12500
                    finalSum *= 1.25
                    break
                case 'London':
                    finalSum = days * 20250
                    break
            }
            break
        case 'Winter':
            switch (destination){
                case 'Dubai':
                    finalSum = days * 45000
                    finalSum *= 0.70
                    break
                case 'Sofia':
                    finalSum = days * 17000
                    finalSum *= 1.25
                    break
                case 'London':
                    finalSum = days * 24000
                    break
            }
            break
    }
    let diff = Math.abs(finalSum - budget)
    
    if (finalSum <= budget){
        console.log(`The budget for the movie is enough! We have ${diff.toFixed(2)} leva left!`)
    }else{
        console.log(`The director needs ${diff.toFixed(2)} leva more!`)
    }
}

movieDest(["200000",
"London",
"Summer",
"7"])

