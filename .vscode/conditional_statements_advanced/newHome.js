function newHome(input){

    let flower = input[0]
    let numOfFlowers = Number(input[1])
    let budget = Number(input[2])

    const rosePrice = 5.00
    const dahliaPrice = 3.80
    const tupilPrice= 2.80
    const narcissusPrice = 3.00
    const gladiolusPrice = 2.50

    let finalSum  = 0

    if (flower == 'Roses'){
        finalSum = numOfFlowers * rosePrice
        if (numOfFlowers > 80){
            finalSum = finalSum * 0.90
        }
    }else if (flower == 'Dahlias'){
        finalSum = numOfFlowers * dahliaPrice
        if (numOfFlowers > 90){
            finalSum = finalSum * 0.85
        }
    }else if(flower == 'Tulips'){
        finalSum = numOfFlowers * tupilPrice
        if (numOfFlowers > 80){
            finalSum = finalSum * 0.85
        }
    }else if(flower == 'Narcissus'){
        finalSum = numOfFlowers * narcissusPrice
        if (numOfFlowers < 120){
            finalSum = finalSum * 1.15
        }
    }else if (flower == 'Gladiolus'){
        finalSum = numOfFlowers * gladiolusPrice
        if (numOfFlowers < 80){
            finalSum = finalSum * 1.20
        }
    }

    if (budget >= finalSum){
        console.log(`Hey, you have a great garden with ${numOfFlowers} ${flower} and ${(budget - finalSum).toFixed(2)} leva left.`)
    }else {
        console.log(`Not enough money, you need ${(finalSum - budget).toFixed(2)} leva more.`)
    }

}

newHome(["Tulips",
"88",
"260"])
