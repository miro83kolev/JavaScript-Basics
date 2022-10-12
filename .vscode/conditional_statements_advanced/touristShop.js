function touristShop(input){

    let bugdet = Number(input[0])
    let index = 1

    let command = input[index]
    index ++
    let counter = 1
    let totalSum = 0

    while (command !== 'Stop'){
        let item = command          
        let price = Number(input[index])
        index ++

        if (price <= bugdet){
            if (counter % 3 == 0){
                price *= 0.50
            }
            bugdet -= price
            totalSum += price
            counter ++
        }else{
            let diff = Math.abs(price - bugdet)
            console.log(`You don't have enough money!`)
            console.log(`You need ${diff.toFixed(2)} leva!`)
            break
        }


        command = input[index]
        index ++
    }
    if (command === 'Stop'){
        console.log(`You bought ${counter - 1} products for ${totalSum.toFixed(2)} leva.`)
    }
}

touristShop(["54",
"Thermal underwear",
"24",
"Sunscreen",
"45"])
