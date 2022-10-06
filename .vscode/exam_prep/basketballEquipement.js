function basketBall(input){

    let yearTax = Number(input[0])

    let basketballSneakers = yearTax - (yearTax * 0.40)
    let basketballOutfit = basketballSneakers - (basketballSneakers * 0.20)
    let basketball = Number(basketballOutfit / 4)
    let accessories = Number(basketball/ 5)
    let finalPrice = yearTax + basketballSneakers + basketballOutfit + basketball + accessories

    console.log(finalPrice.toFixed(2))
}

basketBall(["230"])