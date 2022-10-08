function footballResults(input){

    let firstGameResult = input[0]
    let secondGameResult = input[1]
    let thirdGameResult = input[2]

    let firstResultLeft = Number(firstGameResult.split(':')[0])
    let firstResultRight = Number(firstGameResult.split(':')[1])
    let secondResultLeft = Number(secondGameResult.split(':')[0])
    let secondResultRight = Number(secondGameResult.split(':')[1])
    let thirdResultLeft = Number(thirdGameResult.split(':')[0])
    let thirdResultRight = Number(thirdGameResult.split(':')[1])

    let win = 0
    let lost = 0
    let draw = 0

    if (firstResultLeft > firstResultRight){
        win++
    }else if (firstResultLeft < firstResultRight){
        lost ++
    }else if (firstResultRight == firstResultLeft){
        draw ++
    }

    if (secondResultLeft > secondResultRight){
        win++
    }else if (secondResultLeft < secondResultRight){
        lost ++
    }else if (secondResultLeft == secondResultRight){
        draw ++
    }

    if (thirdResultLeft > thirdResultRight){
        win++
    }else if (thirdResultLeft < thirdResultRight){
        lost ++
    }else if (thirdResultLeft == thirdResultRight){
        draw ++
    }

    console.log(`Team won ${win} games.`)
    console.log(`Team lost ${lost} games.`)
    console.log(`Drawn games: ${draw}`)  
   
    
}

footballResults(["0:2",
"0:1",
"3:3"])
