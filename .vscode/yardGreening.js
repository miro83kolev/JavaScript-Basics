function yardGreening(input){
    const PRICE_PER_SQUARE_METER = 7.61
    let squareMeters = input[0]
    let totalPriceWithoutDiscount = squareMeters * PRICE_PER_SQUARE_METER
    let discount = totalPriceWithoutDiscount * 0.18
    let finalPrice = totalPriceWithoutDiscount - discount

    console.log(`The final price is: ${finalPrice} lv.`)
    console.log(`The discount is: ${discount} lv.`)
}
yardGreening(["150"])