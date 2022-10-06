function change(input){

    let bitcoin = Number(input[0])
    let uans = Number(input[1])
    let commission = Number(input[2])

    const oneBitcoin = 1168
    const oneUan = 0.15
    const oneDollar = 1.76
    const oneEuro = 1.95

    let uanToDollars = uans * oneUan
    let dollarToLeva = uanToDollars * oneDollar
    let finalSumInLeva = (bitcoin * oneBitcoin) + dollarToLeva
    let sumToEuro = finalSumInLeva / oneEuro
    let commissionEuro = sumToEuro * (commission / 100)
    let finalAmount = sumToEuro - commissionEuro

    console.log(finalAmount.toFixed(2))
}

change(["20",
"5678",
"2.4"])
