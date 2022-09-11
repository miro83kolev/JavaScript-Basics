function foodDelivery(input){

    const chickenMenuPrice = 10.35
    const fishMenuPrice = 12.40
    const veggieMenuPrice = 8.15
    const deliveryPrice = 2.50

    let numberChickenMenu = Number(input[0])
    let numberFishMenu = Number(input[1])
    let numberVeggieMenu = Number(input[2])

    let totalPriceAllMenus = (numberChickenMenu * chickenMenuPrice) + (numberFishMenu * fishMenuPrice) + (numberVeggieMenu * veggieMenuPrice)
    let totalDessert = totalPriceAllMenus * 0.20
    let finalSum = totalPriceAllMenus + totalDessert + deliveryPrice
    console.log(finalSum)

}
foodDelivery(["9 ",
"2 ",
"6 "]
)