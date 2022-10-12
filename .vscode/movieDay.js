function movieDay(input){

    let timeForShooting = Number(input[0])
    let numberOfScenes = Number(input[1])
    let sceneTime = Number(input[2])

    let prepTime = timeForShooting * 0.15
    let totalTimeToShoot = numberOfScenes * sceneTime
    let finalTime = prepTime + totalTimeToShoot

    if (finalTime > timeForShooting){
        let diff = Math.round(finalTime - timeForShooting)
        console.log(`Time is up! To complete the movie you need ${diff} minutes.`)
    }else{
        let diff2 = Math.round(timeForShooting - finalTime)
        console.log(`You managed to finish the movie on time! You have ${diff2} minutes left!`)
    }
}

movieDay(["60",
"15",
"3"])
