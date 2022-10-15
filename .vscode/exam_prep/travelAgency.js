function travelAgency(input){

    let town = input[0]
    let packageType = input[1]
    let vipOrNot = input[2]
    let daysOfStay = Number(input[3])

    let pricePerDay = 0
    let finalPrice = 0   

    switch (town){
        
        case 'Bansko':
            switch (packageType){
                case 'noEquipment':
                    if (vipOrNot === 'yes'){
                        pricePerDay = 80
                        pricePerDay *= 0.95
                        if (daysOfStay < 1){
                            console.log('Days must be positive number!')
                            break
                        }
                        finalPrice = daysOfStay * pricePerDay
                        console.log(`The price is ${finalPrice.toFixed(2)}lv! Have a nice time!`)
                    }else{
                        pricePerDay = 80
                        if (daysOfStay < 1){
                            console.log('Days must be positive number!')
                            break
                        }                        
                        finalPrice = daysOfStay * pricePerDay
                        console.log(`The price is ${finalPrice.toFixed(2)}lv! Have a nice time!`)
                    }
                    break
                case 'withEquipment':
                    if (vipOrNot === 'yes'){
                        pricePerDay = 100
                        pricePerDay *= 0.90
                        if (daysOfStay < 1){
                            console.log('Days must be positive number!')
                            break
                        }
                        finalPrice = daysOfStay * pricePerDay
                        console.log(`The price is ${finalPrice.toFixed(2)}lv! Have a nice time!`)
                    }else{
                        pricePerDay = 100  
                        if (daysOfStay < 1){
                            console.log('Days must be positive number!')
                            break
                        }                     
                        finalPrice = daysOfStay * pricePerDay
                        console.log(`The price is ${finalPrice.toFixed(2)}lv! Have a nice time!`)
                    }
                    break                    
                default:
                    console.log(`Invalid input!`)
                    break
            }
            break
        case 'Borovets':
            switch (packageType){
                case 'noEquipment':
                    if (vipOrNot === 'yes'){
                        pricePerDay = 80
                        pricePerDay *= 0.95
                        if (daysOfStay < 1){
                            console.log(`Days must be positive number!`)
                            break
                        }else{
                            finalPrice = daysOfStay * pricePerDay
                            console.log(`The price is ${finalPrice.toFixed(2)}lv! Have a nice time!`)
                        }                        
                    }else{
                        pricePerDay = 80
                        if (daysOfStay < 1){
                            console.log(`Days must be positive number!`)
                            break
                        }else{
                            finalPrice = daysOfStay * pricePerDay
                            console.log(`The price is ${finalPrice.toFixed(2)}lv! Have a nice time!`)
                        }                       
                    }
                    break             
                    
                case 'withEquipment':
                    if (vipOrNot === 'yes'){
                        pricePerDay = 100
                        pricePerDay *= 0.90
                        if (daysOfStay < 1){
                            console.log(`Days must be positive number!`)
                            break
                        }else{
                            finalPrice = daysOfStay * pricePerDay
                            console.log(`The price is ${finalPrice.toFixed(2)}lv! Have a nice time!`)
                        }  
                       
                    }else{
                        pricePerDay = 100
                        if (daysOfStay < 1){
                            console.log(`Days must be positive number!`)
                            break
                        }else{
                            finalPrice = daysOfStay * pricePerDay
                            console.log(`The price is ${finalPrice.toFixed(2)}lv! Have a nice time!`)
                        }                       
                        
                    }
                    break
                default:
                    console.log(`Invalid input!`)
                    break
            }
            break
        case 'Varna':
            switch (packageType){
                case 'noBreakfast':
                    if (vipOrNot === 'yes'){
                        pricePerDay = 100
                        pricePerDay *= 0.93
                        if (daysOfStay < 1){
                            console.log('Days must be positive number!')
                            break
                        }
                        finalPrice = daysOfStay * pricePerDay
                        console.log(`The price is ${finalPrice.toFixed(2)}lv! Have a nice time!`)
                    }else{
                        pricePerDay = 100
                        if (daysOfStay < 1){
                            console.log('Days must be positive number!')
                            break
                        }                       
                        finalPrice = daysOfStay * pricePerDay
                        console.log(`The price is ${finalPrice.toFixed(2)}lv! Have a nice time!`)
                    }
                    break              
                    
                case 'withBreakfast':
                    if (vipOrNot === 'yes'){
                        pricePerDay = 130
                        pricePerDay *= 0.88
                        if (daysOfStay < 1){
                            console.log('Days must be positive number!')
                            break
                        }
                        finalPrice = daysOfStay * pricePerDay
                        console.log(`The price is ${finalPrice.toFixed(2)}lv! Have a nice time!`)
                    }else{
                        pricePerDay = 130
                        if (daysOfStay < 1){
                            console.log('Days must be positive number!')
                            break
                        }                       
                        finalPrice = daysOfStay * pricePerDay
                        console.log(`The price is ${finalPrice.toFixed(2)}lv! Have a nice time!`)
                    }
                    break
                default:
                    console.log(`Invalid input!`)
                    break
            }
            break
        case 'Burgas':
            switch (packageType){
                case 'noBreakfast':
                    if (vipOrNot === 'yes'){
                        pricePerDay = 100
                        pricePerDay *= 0.93
                        if (daysOfStay < 1){
                            console.log('Days must be positive number!')
                            break
                        }
                        finalPrice = daysOfStay * pricePerDay
                        console.log(`The price is ${finalPrice.toFixed(2)}lv! Have a nice time!`)
                    }else{
                        pricePerDay = 100 
                        if (daysOfStay < 1){
                            console.log('Days must be positive number!')
                            break
                        }                       
                        finalPrice = daysOfStay * pricePerDay
                        console.log(`The price is ${finalPrice.toFixed(2)}lv! Have a nice time!`)
                    }
                    break              
                    
                case 'withBreakfast':
                    if (vipOrNot === 'yes'){
                        pricePerDay = 130
                        pricePerDay *= 0.88
                        if (daysOfStay < 1){
                            console.log('Days must be positive number!')
                            break
                        }
                        finalPrice = daysOfStay * pricePerDay
                        console.log(`The price is ${finalPrice.toFixed(2)}lv! Have a nice time!`)
                    }else{
                        pricePerDay = 130 
                        if (daysOfStay < 1){
                            console.log('Days must be positive number!')
                            break
                        }                      
                        finalPrice = daysOfStay * pricePerDay
                        console.log(`The price is ${finalPrice.toFixed(2)}lv! Have a nice time!`)
                    }
                    break
                default:
                    console.log(`Invalid input!`)
                    break
            }
            break
        default:
            console.log(`Invalid input!`)
            break
    } 

    
}

travelAgency(["Burgas",
"noBreakfast",
"no",
"4"])

