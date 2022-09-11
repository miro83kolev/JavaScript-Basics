function basketballEquipement(input){

    let totalYearTax = Number(input[0])
    let totalBasketballShoes = totalYearTax - (totalYearTax * 0.40)
    let totalBasketballClothes = totalBasketballShoes - (totalBasketballShoes * 0.20)
    let totalBasketball = totalBasketballClothes / 4
    let totalBasketballAcessories = totalBasketball / 5
    let finalSum = totalYearTax + totalBasketballShoes + totalBasketballClothes + totalBasketball + totalBasketballAcessories
    console.log(finalSum)
}

basketballEquipement(["550 "])