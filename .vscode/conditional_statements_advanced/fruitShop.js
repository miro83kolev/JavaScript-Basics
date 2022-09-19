function fruitShop(input){

    let product = input[0]
    let day = input[1]
    let quantity = Number(input[2])
    let finalPrice = 0

    if (day == 'Monday' || day == 'Tuesday' || day == 'Wednesday' || day == 'Thursday' || day == 'Friday'){
        if (product == 'banana'){
            finalPrice = quantity * 2.50
            console.log(finalPrice.toFixed(2))
        }else if (product == 'apple'){
            finalPrice = quantity * 1.20
            console.log(finalPrice.toFixed(2))
        }else if (product == 'orange'){
            finalPrice = quantity * 0.85
            console.log(finalPrice.toFixed(2))
        }else if (product == 'grapefruit'){
            finalPrice = quantity * 1.45
            console.log(finalPrice.toFixed(2))
        }else if (product == 'kiwi'){
            finalPrice = quantity * 2.70
            console.log(finalPrice.toFixed(2))
        }else if (product == 'pineapple'){
            finalPrice = quantity * 5.50
            console.log(finalPrice.toFixed(2))
        }else if (product == 'grapes'){
            finalPrice = quantity * 3.85
            console.log(finalPrice.toFixed(2))
        }else{
            console.log('error')
        }
    }else if (day == 'Saturday' || day == 'Sunday'){
        if (product == 'banana'){
            finalPrice = quantity * 2.70
            console.log(finalPrice.toFixed(2))
        }else if (product == 'apple'){
            finalPrice = quantity * 1.25
            console.log(finalPrice.toFixed(2))
        }else if (product == 'orange'){
            finalPrice = quantity * 0.90
            console.log(finalPrice.toFixed(2))
        }else if (product == 'grapefruit'){
            finalPrice = quantity * 1.60
            console.log(finalPrice.toFixed(2))
        }else if (product == 'kiwi'){
            finalPrice = quantity * 3.00
            console.log(finalPrice.toFixed(2))
        }else if (product == 'pineapple'){
            finalPrice = quantity * 5.60
            console.log(finalPrice.toFixed(2))
        }else if (product == 'grapes'){
            finalPrice = quantity * 4.20
            console.log(finalPrice.toFixed(2))
        }else{
            console.log('error')
        }
    }else{
        console.log('error')
    }

}


fruitShop(["tomato",
"Monday",
"0.5"])





