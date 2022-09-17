function smallShop(input){

    let product = input[0]
    let city = input[1]
    let quantity = Number(input[2])
    let finalSum = 0

    switch(city){
        case 'Sofia':
            if (product == "coffee"){
                finalSum = quantity * 0.50
                console.log(finalSum); break
            }else if (product == "water"){
                finalSum = quantity * 0.80
                console.log(finalSum); break
            }else if (product == "beer"){
                finalSum = quantity * 1.20
                console.log(finalSum); break
            }else if (product == "sweets"){
                finalSum = quantity * 1.45
                console.log(finalSum); break
            }else if (product == "peanuts"){
                finalSum = quantity * 1.60
                console.log(finalSum); break
            }
        case 'Plovdiv':
            if (product == "coffee"){
                finalSum = quantity * 0.40
                console.log(finalSum); break
            }else if (product == "water"){
                finalSum = quantity * 0.70
                console.log(finalSum); break
            }else if (product == "beer"){
                finalSum = quantity * 1.15
                console.log(finalSum); break
            }else if (product == "sweets"){
                finalSum = quantity * 1.30
                console.log(finalSum); break
            }else if (product == "peanuts"){
                finalSum = quantity * 1.50
                console.log(finalSum); break
            }
        case 'Varna':
            if (product == "coffee"){
                finalSum = quantity * 0.45
                console.log(finalSum); break
            }else if (product == "water"){
                finalSum = quantity * 0.70
                console.log(finalSum); break
            }else if (product == "beer"){
                finalSum = quantity * 1.10
                console.log(finalSum); break
            }else if (product == "sweets"){
                finalSum = quantity * 1.35
                console.log(finalSum); break
            }else if (product == "peanuts"){
                finalSum = quantity * 1.55
                console.log(finalSum); break
            }      
    }
}

smallShop(["sweets",
"Sofia",
"2.23"])
