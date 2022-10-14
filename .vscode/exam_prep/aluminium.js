function aluminium(input){

    let joinery = Number(input[0])
    let jType = input[1]
    let deliveryType = input[2]

    let price = 0

    if (joinery < 10){
        console.log('Invalid order')
    }else if (jType === "90X130" || jType === "100X150" || jType === "130X180" || jType === "200X300"){
        if (jType === '90X130'){
            price = 110

            if (joinery > 30 && joinery <= 60){
                price *= 0.95
            }else if (joinery > 60){
                price *= 0.92
            }
        }else if (jType === '100X150'){
            price = 140
            if (joinery >= 40 && joinery <= 80){
                price *= 0.94
            }else if (joinery > 80){
                price *= 0.90
            }
        }else if (jType === '130X180'){
            price = 190
            if (joinery >= 20 && joinery <= 50){
                price *= 0.93
            }else if (joinery > 50){
                price *= 0.88
            }
        }else if (jType === '200X300'){
            price = 250
            if (joinery >= 25 && joinery <= 50){
                price *= 0.91
            }else if (joinery > 50){
                price *= 0.86
            }
        }
        price *= joinery

        if (deliveryType === 'With delivery'){
            price += 60
        }
        if (joinery > 99){
            price *= 0.96
        }
        console.log(`${price.toFixed(2)} BGN`)
    }
}

aluminium(["2",
"130X180",
"With delivery"])

