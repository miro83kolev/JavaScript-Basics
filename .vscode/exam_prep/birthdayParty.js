function bdParty(input){
    let rent = Number(input[0])

    let cakePrice = rent * 0.20
    let drinks = cakePrice - (cakePrice * 0.45)
    let animation = rent / 3

    let neededSum = rent + cakePrice + drinks + animation

    console.log(neededSum)
}

bdParty(['3720'])
