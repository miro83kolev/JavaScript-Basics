function currier(input){

    let weight = Number(input[0])
    let type = input[1]
    let distance = Number(input[2])

    let finalPrice = 0
    let overPrice = 0

    switch (type){
        case 'standard':
            if (weight < 1){
                finalPrice = distance * 0.03
            }else if (weight >= 1 && weight < 10){
                finalPrice = distance * 0.05
            }else if (weight >= 10 && weight < 40){
                finalPrice = distance * 0.10
            }else if (weight >= 40 && weight < 90){
                finalPrice = distance * 0.15
            }else if (weight >= 90 && weight < 150){
                finalPrice = distance * 0.20
            }
            break
        case 'express':
            if (weight < 1){
                finalPrice = distance * 0.03
                overPrice = weight * (0.03 * 0.80) * distance
                finalPrice = finalPrice + overPrice                
            }else if (weight >= 1 && weight < 10){
                finalPrice = distance * 0.05
                overPrice = (weight * (0.05 * 0.40)) * distance
                finalPrice = finalPrice + overPrice
            }else if (weight >= 10 && weight < 40){
                finalPrice = distance * 0.10
                overPrice = (weight * (0.10 * 0.05)) * distance
                finalPrice = finalPrice + overPrice
            }else if (weight >= 40 && weight < 90){
                finalPrice = distance * 0.15
                overPrice = (weight * (0.15 * 0.02)) * distance
                finalPrice = finalPrice + overPrice
            }else if (weight >= 90 && weight < 150){
                finalPrice = distance * 0.20
                overPrice = (weight * (0.20 * 0.01)) * distance
                finalPrice = finalPrice + overPrice
            }
            break
    }

    console.log(`The delivery of your shipment with weight of ${weight.toFixed(3)} kg. would cost ${finalPrice.toFixed(2)} lv.`)
}

currier(["20",
"standard",
"349"])

