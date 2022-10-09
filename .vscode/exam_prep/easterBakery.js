function easterBakery(input){

    let priceFlour = Number(input[0])
    let kgFlour = Number(input[1])
    let kgSugar = Number(input[2])
    let eggsCartoon = Number(input[3])
    let yeast = Number(input[4])

    let priceSugar = priceFlour * 0.75
    let eggsPrice = priceFlour * 1.10
    let yeastPrice = priceSugar * 0.20

    let totalPrice = (priceFlour * kgFlour) + (kgSugar * priceSugar) + (eggsCartoon * eggsPrice) + (yeast * yeastPrice)

    console.log(totalPrice.toFixed(2))
}

easterBakery(["63.44",
"3.57",
"6.35",
"8",
"2"])
