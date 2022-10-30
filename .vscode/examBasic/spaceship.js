function spaceship(input){

    let width = Number(input[0])
    let length = Number(input[1])
    let height = Number(input[2])
    let avgAstroHeight = Number(input[3])

    let spaceshipVolume = width * length * height
    let roomVolume = (avgAstroHeight + 0.40) * 2 * 2
    let astroNum = Math.floor(spaceshipVolume / roomVolume)

    if (astroNum >= 3 && astroNum <= 10){
        console.log(`The spacecraft holds ${astroNum} astronauts.`)
    }else if (astroNum < 3){
        console.log(`The spacecraft is too small.`)
    }else{
        console.log(`The spacecraft is too big.`)
    }
}

spaceship(["3",
"3", 
"4",
"1.68"])
