function zooShoop(input){
    const DOG_FOOD_PRICE = 2.50
    const CAT_FOOD_PRICE = 4.00
    let dogFoodBoxes = input[0]
    let catFoodBoxes = input[1]    
    let endSum = DOG_FOOD_PRICE * dogFoodBoxes + CAT_FOOD_PRICE * catFoodBoxes
    console.log(`${endSum} lv.`)
}
zooShoop(["13",
"9"]
)