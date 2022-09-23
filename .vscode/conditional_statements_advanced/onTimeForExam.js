function onTime(input){

    let hours = Number(input[0])
    let minutes = Number(input[1])
    let hourOfArrival = Number(input[2])
    let minuteOfArrival = Number(input[3])

    let totalExamMinites = hours * 60 + minutes
    let totalArrivalMinutes = hourOfArrival * 60 + minuteOfArrival

    let difference = totalArrivalMinutes - totalExamMinites

    if (difference < -30)
            console.log("Early")
        else if (difference <= 0)
            console.log("On time")
        else
            console.log("Late")
        if (difference != 0)
        {
            let hours = Math.abs(difference / 60);
            hours = Math.floor(hours)
            let minutes = Math.abs(difference % 60);
            
            if (hours > 0)                
            {
                if (minutes < 10)
                    console.log(hours + ":0" + minutes + " hours");
                else                    
                    console.log(hours + ":" + minutes + " hours");
            }
            else
                console.log(minutes + " minutes");
            if (difference < 0)
                console.log("before the start");
            else
                console.log("after the start");
        }    

}
onTime(["11",
"30",
"8",
"12"])











