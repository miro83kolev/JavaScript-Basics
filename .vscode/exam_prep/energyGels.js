function energyGels(input){

    let fruit = input[0]
    let sizeOfSet = input[1]
    let orderedSets = input[2]

    let finalPrice = 0

    switch(sizeOfSet){
        case 'small': 
            switch(fruit){
                case 'Watermelon':
                    finalPrice = 2 * 56 * orderedSets
                     break
                case 'Mango': 
                    finalPrice = 2 * 36.66 * orderedSets
                     break
                case 'Pineapple':
                    finalPrice = 2 * 42.10 * orderedSets
                     break
                case 'Raspberry': 
                    finalPrice = 2 * 20 * orderedSets
                     break
            }        
        break
        case 'big': 
            switch(fruit){
                case 'Watermelon':
                    finalPrice = 5 * 28.70 * orderedSets
                    break
                case 'Mango': 
                    finalPrice = 5 * 19.60 * orderedSets
                    break
                case 'Pineapple':
                    finalPrice = 5 * 24.80 * orderedSets
                    break
                case 'Raspberry': 
                    finalPrice = 5 * 15.20 * orderedSets
                    break
        }  
        break

    }

    if (finalPrice >= 400 && finalPrice <= 1000){
        finalPrice *= 0.85
    }else if (finalPrice > 1000){
        finalPrice *= 0.50
    }

    console.log(`${finalPrice.toFixed(2)} lv.`)
}

energyGels(["Mango",
"big",
"8"])
