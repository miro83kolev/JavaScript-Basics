function coffeeMachine(input){

    let drink = input[0]
    let spice = input[1]
    let numberOfDrinks = Number(input[2])

    let finalPrice = 0

    if (drink === 'Espresso'){
        if (spice === 'Without'){
            finalPrice = numberOfDrinks * 0.90
            finalPrice *= 0.65
            if (numberOfDrinks >= 5){
                finalPrice *= 0.75
            }
        }else if (spice === 'Normal'){
            finalPrice = numberOfDrinks * 1.00
            if (numberOfDrinks >= 5){
                finalPrice *= 0.75
            }
        }else if (spice == 'Extra'){
            finalPrice = numberOfDrinks * 1.20
            if (numberOfDrinks >= 5){
                finalPrice *= 0.75
            }
        }
    }else if (drink === 'Cappuccino'){
        if (spice === 'Without'){
            finalPrice = numberOfDrinks * 1.00
            finalPrice *= 0.65            
        }else if (spice === 'Normal'){
            finalPrice = numberOfDrinks * 1.20
            
        }else if (spice == 'Extra'){
            finalPrice = numberOfDrinks * 1.60            
        }

    }else if (drink == 'Tea'){
        if (spice === 'Without'){
            finalPrice = numberOfDrinks * 0.50
            finalPrice *= 0.65            
        }else if (spice === 'Normal'){
            finalPrice = numberOfDrinks * 0.60
            
        }else if (spice == 'Extra'){
            finalPrice = numberOfDrinks * 0.70          
        }

    }
    
    if (finalPrice > 15){
        finalPrice = finalPrice * 0.80
    }

    console.log(`You bought ${numberOfDrinks} cups of ${drink} for ${finalPrice.toFixed(2)} lv.`)

}

coffeeMachine(["Tea",
"Extra",
"3"])
