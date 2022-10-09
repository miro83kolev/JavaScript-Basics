function easterGuests(input){

    let guests = Number(input[0])
    let budget = Number(input[1])

    let numOfEasterBreads = Math.ceil(guests / 3)
    let numOfEggs = guests * 2
    let finalPrice = (numOfEasterBreads * 4) + (numOfEggs * 0.45)
    let diff = Math.abs(finalPrice - budget)

    if (finalPrice <= budget){
        console.log(`Lyubo bought ${numOfEasterBreads} Easter bread and ${numOfEggs} eggs.`)
        console.log(`He has ${diff.toFixed(2)} lv. left.`)
    }else{
        console.log(`Lyubo doesn't have enough money.`)
        console.log(`He needs ${diff.toFixed(2)} lv. more.`)
    }
}

easterGuests(["9",
"12"])
