function ceremony(input){

    let rent = Number(input[0])
    let statuesPrice = rent - (rent * 0.30)
    let cathering = statuesPrice - (statuesPrice * 0.15)
    let music = cathering / 2
    let total = rent + statuesPrice + cathering + music
    
    console.log(total.toFixed(2))
}

ceremony(["5555"])