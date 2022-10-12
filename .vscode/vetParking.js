function vetParking(input){

    let days = Number(input[0])
    let hours = Number(input[1])
    let totalSum = 0

    for (let day = 1; day <= days; day ++){
        let dayTotal = 0
        let hourCharge = 0

        for (let hour = 1; hour <= hours; hour ++){
            if (day % 2 == 0 && hour % 2 != 0){
                hourCharge = 2.50
            }else if (day % 2 != 0 && hour % 2 == 0){
                hourCharge = 1.25
            }else{
                hourCharge = 1.00
            }
            totalSum += hourCharge
            dayTotal += hourCharge
        }
        console.log(`Day: ${day} - ${dayTotal.toFixed(2)} leva`)
    }
    console.log(`Total: ${totalSum.toFixed(2)} leva`)
}

vetParking(["5",
"2"])
