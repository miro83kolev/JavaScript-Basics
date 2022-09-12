function worldRecord(input){

    let record = Number(input[0])
    let distanceMeters = Number(input[1])
    let timeInSeconds = Number(input[2])

    let neededTime = distanceMeters * timeInSeconds
    let addedTime = Math.floor(distanceMeters / 15) * 12.5
    let totalTime = neededTime + addedTime

    if (totalTime >= record){
        console.log(`No, he failed! He was ${(totalTime-record).toFixed(2)} seconds slower.`)
    }else{
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
    }
}
worldRecord(["55555.67",
"3017",
"5.03"])

