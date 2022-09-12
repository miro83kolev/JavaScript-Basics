function lunchBreak(input){

    let nameOfSeries = input[0]
    let episodLength = Number(input[1])
    let breakLength = Number(input[2])

    let timeForLunch = breakLength / 8
    let timeForBreak = breakLength / 4
    let totalTimeLeft = breakLength - timeForBreak - timeForLunch

    if (totalTimeLeft >= episodLength){
        console.log(`You have enough time to watch ${nameOfSeries} and left with ${Math.ceil(totalTimeLeft - episodLength)} minutes free time.`)
    }else{
        console.log(`You don't have enough time to watch ${nameOfSeries}, you need ${Math.ceil(episodLength - totalTimeLeft)} more minutes.`)
    }
}

lunchBreak(["Teen Wolf",
"48",
"60"])
