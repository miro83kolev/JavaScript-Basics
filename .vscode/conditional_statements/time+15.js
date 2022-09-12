function timePlusFifteen(input){

    let hour = Number(input[0])
    let minutes = Number(input[1])

    let minutes_plus_fifteen = minutes + 15

    if (minutes_plus_fifteen > 59){
        minutes_plus_fifteen -= 60
        hour += 1
    }
    if (hour == 24) {
        hour = 0
    }

    if (minutes_plus_fifteen < 10){
        console.log(`${hour}:0${minutes_plus_fifteen}`)
    }else{
        console.log(`${hour}:${minutes_plus_fifteen}`)
    }
}

timePlusFifteen(["12", "49"])