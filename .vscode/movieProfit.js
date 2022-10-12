function movieProfit(input){
    
    let movieName = input[0]
    let numOfDays = Number(input[1])
    let numOfTickets = Number(input[2])
    let priceOfTicket = Number(input[3])
    let percentageCinema = Number(input[4])

    let totalPricePerDay = numOfTickets * priceOfTicket
    let totalIncome = numOfDays * totalPricePerDay
    let incomeForCinema = totalIncome * percentageCinema / 100
    let movieProfit = totalIncome - incomeForCinema

    console.log(`The profit from the movie ${movieName} is ${movieProfit.toFixed(2)} lv.`)
}

movieProfit(["Python Basics",
"40",
"34785",
"10.45",
"14"])
