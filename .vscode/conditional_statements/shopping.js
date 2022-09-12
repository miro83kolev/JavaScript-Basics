function shopping(input){

    const videoCard = 250
    let budget = Number(input[0])
    let numOfVideoCards = Number(input[1])
    let numOfProcessors = Number(input[2])
    let numOfRams = Number(input[3])

    let sumVideoCards = videoCard * numOfVideoCards
    let sumProcessors = (sumVideoCards * 0.35) * numOfProcessors
    let sumRams = (sumVideoCards * 0.10) * numOfRams
    let finalSum = sumVideoCards + sumProcessors + sumRams

    if (numOfProcessors < numOfVideoCards){
        finalSum *= 0.85
    }

    if (finalSum > budget){
        console.log(`Not enough money! You need ${(finalSum - budget).toFixed(2)} leva more!`)
    }else{
        console.log(`You have ${(budget - finalSum).toFixed(2)} leva left!`)
    }
}

shopping(["920.45",
"3",
"1",
"1"])

