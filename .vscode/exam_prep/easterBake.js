function easterBake(input){
    let index = 0
    let NumOfEasterBreads = Number(input[index])
    index ++

    let totalSugar = 0
    let totalFlour = 0

    let maxSugar = Number.MIN_SAFE_INTEGER
    let maxFlour = Number.MIN_SAFE_INTEGER

    for (let i = 0; i < NumOfEasterBreads; i++){
        let sugarQ = Number(input[index])
        index ++
        let flourQ = Number(input[index])
        index ++

        totalSugar += sugarQ
        totalFlour += flourQ

        if (sugarQ > maxSugar){
            maxSugar = sugarQ
        }

        if (flourQ > maxFlour ){
            maxFlour = flourQ
        }

    }

    let countSugarPacks = Math.ceil(totalSugar / 950)
    let countFlourPacks = Math.ceil(totalFlour / 750)

    console.log(`Sugar: ${countSugarPacks}`)
    console.log(`Flour: ${countFlourPacks}`)
    console.log(`Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`)

}

easterBake(["4",
"500",
"350",
"560",
"430",
"600",
"345",
"578",
"543"])
