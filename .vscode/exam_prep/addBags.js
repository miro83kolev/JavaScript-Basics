function addBags(input){

    let priceLuggage = Number(input[0])
    let kgLuggage = Number(input[1])
    let dayToTravel = Number(input[2])
    let numOfLuggages = Number(input[3])

    let price = 0
    let finalPrice = 0

    if (kgLuggage < 10){
        price = priceLuggage * 0.20
    }else if (kgLuggage >= 10 && kgLuggage <= 20){
        price = priceLuggage * 0.50
    }else{
        price = priceLuggage
    }
    
    if (dayToTravel > 30){
        price = price + price * 0.10
    }else if (dayToTravel >= 7 && dayToTravel <= 30){
        price = price + price * 0.15
    }else if (dayToTravel < 7){
        price = price + price * 0.40
    }

    finalPrice = price * numOfLuggages

    console.log(`The total price of bags is: ${finalPrice.toFixed(2)} lv.`)
}

addBags(["63.80",
"23",
"3",
"1"])
