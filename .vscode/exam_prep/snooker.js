function snooker(input){

    let stage = input[0]
    let ticketType = input[1]
    let numOfTickets = Number(input[2])
    let picture = input[3]

    let price = 0
    let finalPrice = 0

    switch (stage){
        case 'Quarter final':
            switch (ticketType){
                case 'Standard':
                    price = numOfTickets * 55.50
                    break
                case 'Premium':
                    price = numOfTickets * 105.20                    
                    break
                case 'VIP':
                    price = numOfTickets * 118.90                    
                    break
            }
            break
        case 'Semi final':
            switch (ticketType){
                case 'Standard':
                    price = numOfTickets * 75.88                    
                    break
                case 'Premium':
                    price = numOfTickets * 125.22                    
                    break
                case 'VIP':
                    price = numOfTickets * 300.40                    
                    break
            }
            break
        case 'Final':
            switch (ticketType){
                case 'Standard':
                    price = numOfTickets * 110.10                    
                    break
                case 'Premium':
                    price = numOfTickets * 160.66                    
                    break
                case 'VIP':
                    price = numOfTickets * 400                    
                    break
            }
            break
    }

    if (price > 4000 && picture == "Y")
    {
        finalPrice = price * 0.75;
    }
    else if (price >= 2500 && price <= 4000 && picture == "Y")
    {
        price *= 0.90;
        finalPrice = price + (numOfTickets * 40);
    }
    else if (price > 4000 && picture == "N")
    {
        finalPrice = price * 0.75;
    }
    else if (price >= 2500 && price <= 4000 && picture == "N")
    {
        finalPrice = price * 0.90;
    }
    else if (price < 2500 && picture == "Y")
    {
        finalPrice = price + (numOfTickets * 40);
    }
    else if (price < 2500 && picture == "N")
    {
        finalPrice = price;
    }

    console.log(finalPrice.toFixed(2))

}

snooker(["Semi final",
"VIP",
"9",
"Y"])
