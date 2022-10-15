function easterEggs(input){

    let index = 0
    let totalEggsPainted = Number(input[index])
    index ++

    let counterRed = 0
    let counterOrange = 0
    let counterBlue = 0
    let counterGreen = 0

    for (let i = 0; i < totalEggsPainted; i++){
        let colorOfEgg = input[index]
        index ++

        if (colorOfEgg === 'red'){
            counterRed ++
        }else if (colorOfEgg === 'orange'){
            counterOrange ++
        }else if (colorOfEgg === 'blue'){
            counterBlue ++
        }else if (colorOfEgg === 'green'){
            counterGreen ++
        }


    }

    let maxEggsCount = counterRed
    let maxName = 'red'

    if (counterOrange > maxEggsCount){
        maxEggsCount = counterOrange
        maxName = 'orange'
    }

    if (counterBlue > maxEggsCount){
        maxEggsCount = counterBlue
        maxName = 'blue'
    }

    if (counterGreen > maxEggsCount){
        maxEggsCount = counterGreen
        maxName = 'green'
    }

    console.log(`Red eggs: ${counterRed}`)
    console.log(`Orange eggs: ${counterOrange}`)
    console.log(`Blue eggs: ${counterBlue}`)
    console.log(`Green eggs: ${counterGreen}`)
    console.log(`Max eggs: ${maxEggsCount} -> ${maxName}`)
}

easterEggs(["4",
"blue",
"red",
"blue",
"orange"]) 
