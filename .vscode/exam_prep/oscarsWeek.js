function oscarsWeek(input){

    let movieName = input[0]
    let hallType = input[1]
    let numOfTickets = Number(input[2])

    let totalPrice = 0

    switch (movieName){
        case 'A Star Is Born':
            switch (hallType){
                case 'normal':
                    totalPrice = numOfTickets * 7.50
                    break
                case 'luxury':
                    totalPrice = numOfTickets * 10.50
                    break
                case 'ultra luxury':
                    totalPrice = numOfTickets * 13.50
                    break
            }
            break
        case 'Bohemian Rhapsody':
            switch (hallType){
                case 'normal':
                    totalPrice = numOfTickets * 7.35
                    break
                case 'luxury':
                    totalPrice = numOfTickets * 9.45
                    break
                case 'ultra luxury':
                    totalPrice = numOfTickets * 12.75
                    break
            }
            break
        case 'Green Book':
            switch (hallType){
                case 'normal':
                    totalPrice = numOfTickets * 8.15
                    break
                case 'luxury':
                    totalPrice = numOfTickets * 10.25
                    break
                case 'ultra luxury':
                    totalPrice = numOfTickets * 13.25
                    break
            }
            break
        case 'The Favourite':
            switch (hallType){
                case 'normal':
                    totalPrice = numOfTickets * 8.75
                    break
                case 'luxury':
                    totalPrice = numOfTickets * 11.55
                    break
                case 'ultra luxury':
                    totalPrice = numOfTickets * 13.95
                    break
            }
            break
    }

    console.log(`${movieName} -> ${totalPrice.toFixed(2)} lv.`)
}

oscarsWeek(["The Favourite",
"ultra luxury",
"34"])


