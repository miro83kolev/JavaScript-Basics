function cinemaVoucher(input){
    let index = 0

    let voucherPrice = Number(input[index])
    index ++

    let command = input[index]
    index ++

    while (command !== 'End'){
        let purchase = command

        if (purchase.length > 8){

            for (let char = 0; char < purchase.length; char ++){
                let char1 = char[0]
                let char2 = char[1]
            }

        }else{
            char1 = purchase.charCodeAt(0)
        }


        command = input[index]
        index ++
    }
}

cinemaVoucher(["300",
"Captain Marvel",
"popcorn",
"Pepsi"])
