function pcGame(input){
    let index = 0
    let gameCount = Number(input[index])
    index ++

    let countFornite = 0
    let countHearthstone = 0
    let countOverwatch  = 0
    let countOthers = 0


    for (let i = 0; i < gameCount; i++){
        let name = input[index]
        index ++

        switch (name) {
            case 'Fornite': 
                countFornite++               
                break
            case 'Hearthstone':
                countHearthstone ++ 
                break
            case 'Overwatch':
                countOverwatch ++
                break        
            default:
                countOthers ++
                break
        }
    }

    let fornitePer = countFornite / gameCount * 100
    let hearthStonePer = countHearthstone / gameCount * 100
    let overwatchPer = countOverwatch/ gameCount * 100
    let othersPer = countOthers/ gameCount * 100

    console.log(`Hearthstone - ${hearthStonePer.toFixed(2)}%`)
    console.log(`Fornite - ${fornitePer.toFixed(2)}%`)
    console.log(`Overwatch - ${overwatchPer.toFixed(2)}%`)
    console.log(`Others - ${othersPer.toFixed(2)}%`)
}

pcGame(["3",
"Hearthstone",
"Diablo 2",
"Star Craft 2"])

