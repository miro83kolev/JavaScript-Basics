function cinema(input){
    let index = 0

    let movieName = input[index]
    index ++  

    let standartTicketType = 0
    let studentTicketType = 0
    let kidsTicketType = 0

    while (movieName !== 'Finish'){
        let freeSpaces = Number(input[index])
        index ++

        let ticketType = input[index]
        index ++
        
        let spaceTaken = 0

        while (ticketType !== 'End'){
            spaceTaken++

            if (ticketType === 'student'){
                studentTicketType++
            }else if (ticketType === 'standard'){
                standartTicketType ++
            }else{
                kidsTicketType ++
            }

            if (spaceTaken === freeSpaces){
                break
            }

            ticketType = input[index]
            index ++

        }  
        let percentageSpace = ((spaceTaken / freeSpaces) * 100).toFixed(2)
        console.log(`${movieName} - ${percentageSpace}% full.`)  

        movieName = input[index]
        index ++
    }
    let totalTicketsCount = standartTicketType + studentTicketType + kidsTicketType
    let studentTicketPercentage = ((studentTicketType / totalTicketsCount) * 100).toFixed(2)
    let standartTicketPercentage = ((standartTicketType / totalTicketsCount) * 100).toFixed(2)
    let kidsTicketPercentage = ((kidsTicketType / totalTicketsCount) * 100).toFixed(2)

    console.log(`Total tickets: ${totalTicketsCount}`)
    console.log(`${studentTicketPercentage}% student tickets.`)
    console.log(`${standartTicketPercentage}% standard tickets.`)
    console.log(`${kidsTicketPercentage}% kids tickets.`)
}

cinema(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])
