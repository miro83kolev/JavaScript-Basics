function tennis(input){

    let tennisRaquetPrice = Number(input[0])
    let numberTennisRaquet = Number(input[1])
    let numberTennisSneakers = Number(input[2])

    let totalPriceRaquests = tennisRaquetPrice * numberTennisRaquet
    let totalPriceSneakers = (tennisRaquetPrice / 6) * numberTennisSneakers
    let additionalEquipement = (totalPriceRaquests + totalPriceSneakers) * 0.20
    let finalSum = totalPriceRaquests + totalPriceSneakers + additionalEquipement

    let priceForTennisPlayer = (finalSum / 8)
    let sponsorPrice = (finalSum * 7)/ 8

    console.log(`Price to be paid by Djokovic ${Math.floor(priceForTennisPlayer)}`)
    console.log(`Price to be paid by sponsors ${Math.ceil(sponsorPrice)}`)
}

tennis(['386',
    '7',
    '4'
    ])