function cinema(input){

    const premierePrice = 12
    const normalPrice = 7.50
    const discountPrice = 5.00

    let projectionType = input[0]
    let rows = Number(input[1])
    let cols = Number(input[2])

    let finalSum = 0

    if (projectionType == "Premiere"){
        finalSum = rows * cols * premierePrice
    }else if (projectionType == "Normal"){
        finalSum = rows * cols * normalPrice
    }else if (projectionType == "Discount"){
        finalSum = rows * cols * discountPrice
    }else{

    }
    console.log(`${finalSum.toFixed(2)} leva`)

}

cinema(["Discount",
"12",
"30"])
