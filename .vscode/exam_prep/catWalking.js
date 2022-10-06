function cat(input){

    let minutesWalk = Number(input[0])
    let walksPerDay = Number(input[1])
    let caloriesPerDay = Number(input[2])

    let totalMinutesWalk = minutesWalk * walksPerDay
    let totalCaloriesBurned = totalMinutesWalk * 5

    let percentageCaloriesTaken = caloriesPerDay * 0.50

    if(totalCaloriesBurned >= percentageCaloriesTaken){
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${totalCaloriesBurned}.`)
    }else{
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${totalCaloriesBurned}.`)
    }
}

cat(["40",
"2",
"300"])
