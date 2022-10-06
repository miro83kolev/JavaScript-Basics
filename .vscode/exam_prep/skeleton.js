function skeleton(input){

    let minutes = Number(input[0])
    let seconds = Number(input[1])
    let distance = Number(input[2])
    let secondsFor100Metes = Number(input[3])

    let controlTime = (minutes * 60) + seconds
    let timeTaken = distance / 120
    let delay = timeTaken * 2.5
    let finalTime = (distance / 100) * secondsFor100Metes - delay

    if (finalTime <= controlTime){
        console.log('Marin Bangiev won an Olympic quota!')
        console.log(`His time is ${finalTime.toFixed(3)}.`)
    }else{
        let diff = Math.abs(controlTime - finalTime)
        console.log(`No, Marin failed! He was ${diff.toFixed(3)} second slower.`)
    }

}

skeleton(["1",
"20",
"1546",
"12"])
