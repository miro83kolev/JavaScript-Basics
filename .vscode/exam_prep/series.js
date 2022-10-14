function series(input){

    let budget = Number(input[0])
    let numberOfSeries = Number(input[1])

    let totalPrice = 0
    let price = 0

    for (let index = 2; index <input.length; index += 1){
        let serieName = input[index]
        index ++            
        let priceSerie = Number(input[index])
        
        if (serieName === 'Thrones'){
            price = priceSerie * 0.50
            totalPrice += price
        }else if (serieName === 'Lucifer'){
            price = priceSerie * 0.60
            totalPrice += price
        }else if (serieName === 'Protector'){
            price = priceSerie * 0.70
            totalPrice += price
        }else if (serieName === 'TotalDrama'){
            price = priceSerie * 0.80
            totalPrice +=price
        }else if (serieName === 'Area'){
            price = priceSerie * 0.90
            totalPrice += price
        }else{
            price = priceSerie
            totalPrice += price
        }

    }

    let diff = Math.abs(totalPrice - budget)

    if (totalPrice <= budget){
        console.log(`You bought all the series and left with ${diff.toFixed(2)} lv.`)
    }else{
        console.log(`You need ${diff.toFixed(2)} lv. more to buy the series!`)
    }
}

series(["25",
"6",
"Teen Wolf",
"8",
"Protector",
"5",
"TotalDrama",
"5",
"Area",
"4",
"Thrones",
"5",
"Lucifer",
"9"])

