function easterLunch(input){

    const easterBread = 3.20
    const eggs = 4.35
    const cookies = 5.40
    const eggsPaint = 0.15

    let numOfEasterBread = Number(input[0])
    let numOfEggs = Number(input[1])
    let kgOfCookies = Number(input[2])

    let priceOfEasterBread = easterBread * numOfEasterBread
    let eggsPrice = eggs * numOfEggs
    let cookiesPrice = cookies * kgOfCookies
    let paintPrice = numOfEggs * 12 * eggsPaint

    let totalPrice = priceOfEasterBread + eggsPrice + cookiesPrice + paintPrice

    console.log(totalPrice.toFixed(2))
}

easterLunch(["2",
"3",
"2"])
