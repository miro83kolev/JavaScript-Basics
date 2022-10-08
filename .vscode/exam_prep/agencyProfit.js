function profit(input){

    let name = input[0]
    let numOfTickets = Number(input[1])
    let numOfChildTickets = Number(input[2])
    let netPriceAdult = Number(input[3])
    let serviceTax = Number(input[4])

    let netPriceChild = netPriceAdult * 0.30
    let finalPriceAdult = (netPriceAdult + serviceTax)
    let finalPriceChild = (netPriceChild + serviceTax)
    let totalPrice = (numOfTickets * finalPriceAdult) + (finalPriceChild * numOfChildTickets)
    let profit = totalPrice * 0.20

    console.log(`The profit of your agency from ${name} tickets is ${profit.toFixed(2)} lv.`)
}

profit(["Ryanair",
"60",
"23",
"158.96",
"39.12"])
