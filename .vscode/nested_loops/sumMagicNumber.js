function sumMagicNumber(input){

    let start = Number(input[0])
    let finish = Number(input[1])
    let magicNumber = Number(input[2])

    let counter = 0
    let hasBeenFound = false

    for (let x = start; x <= finish; x++){
        for (let y = start; y <= finish; y++){
            counter ++

            if (x + y === magicNumber){
                console.log(`Combination N:${counter} (${x} + ${y} = ${magicNumber})`)
                hasBeenFound = true
                break
            }
        }

        if (hasBeenFound){
            break
        }
    }

    if (!hasBeenFound){
        console.log(`${counter} combinations - neither equals ${magicNumber}`)
    }
}

sumMagicNumber(["23",
"24",
"20"])
