function fruitMarket(input){

    let strawberryPrice = Number(input[0])
    let kgBananas = Number(input[1])
    let kgOranges = Number(input[2])
    let kgRaspberries = Number(input[3])
    let kgStrawberries = Number(input[4])

    let raspberryPrice = strawberryPrice * 0.50
    let orangesPrice = raspberryPrice - (raspberryPrice * 0.40)
    let bananasPrice = raspberryPrice  - (raspberryPrice * 0.80)

    let finalPrice = (strawberryPrice * kgStrawberries) + (kgBananas * bananasPrice) + (kgOranges * orangesPrice) + (kgRaspberries * raspberryPrice)

    console.log(finalPrice.toFixed(2))

}

fruitMarket(['63.5',
    '3.57',
    '6.35',
    '8.15',
    '2.5'
    ])