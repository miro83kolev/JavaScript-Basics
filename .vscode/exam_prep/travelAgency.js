function travelAgency(input){

    let town = input[0]
    let packageType = input[1]
    let vipOrNot = input[2]
    let daysOfStay = Number(input[3])

    let pricePerDay = 0
    let finalPrice = 0

    if (town === 'Bansko' || town === 'Borovets'){
        if (packageType == 'withEquipment' && vipOrNot === 'no'){
            if (daysOfStay < 1){
                console.log('Days must be positive number!')
            }else if (daysOfStay > 7){
                pricePerDay = 100
                finalPrice = (pricePerDay * daysOfStay - 1) 
                console.log(`The price is ${finalPrice.toFixed(2)}lv! Have a nice time!`)
            }else{
                pricePerDay = 100
                finalPrice = pricePerDay * daysOfStay
                console.log(`The price is ${finalPrice.toFixed(2)}lv! Have a nice time!`)

            }           
            

        }else if(packageType == 'noEquipment'){

        }else{
            console.log('Invalid input!')
        }

    }else if (town === 'Varna' || town === 'Burgas'){

    }else{
        console.log(`Invalid input!`)
    }
}