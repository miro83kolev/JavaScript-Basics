function moon(input){

    let avgSpeed = Number(input[0])
    let littersFor100kms =  Number(input[1])

    const distance = 384400
    const hoursOnMoon = 3

    let goBackDistance = distance * 2
    let timeGoBack = Math.ceil(goBackDistance / avgSpeed)
    let totalTime = timeGoBack + hoursOnMoon
    let totalFuel = (littersFor100kms * goBackDistance)  / 100

    console.log(totalTime)
    console.log(totalFuel)
}

moon(["15000",
"4"])
