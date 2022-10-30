function pastryShop(input){

    let pastryType = input[0]
    let numOfPastry = Number(input[1])
    let day = Number(input[2])

    let finalPrice = 0

    switch (pastryType){
        case 'Cake':
            if (day <= 15){
                finalPrice = numOfPastry * 24
                if (finalPrice >= 100 && finalPrice <= 200){
                    finalPrice *= 0.85
                }else if (finalPrice > 200){
                    finalPrice *= 0.75
                }
                finalPrice *= 0.90
            }else if (day >= 16 && day <= 22){
                finalPrice = numOfPastry * 28.70
                if (finalPrice >= 100 && finalPrice <= 200){
                    finalPrice *= 0.85
                }else if (finalPrice > 200){
                    finalPrice *= 0.75
                }
            }else{
                finalPrice = numOfPastry * 28.70
            }
            break
        case 'Souffle':
            if (day <= 15){
                finalPrice = numOfPastry * 6.66
                if (finalPrice >= 100 && finalPrice <= 200){
                    finalPrice *= 0.85
                }else if (finalPrice > 200){
                    finalPrice *= 0.75
                }
                finalPrice *= 0.90
            }else if (day >= 16 && day <= 22){
                finalPrice = numOfPastry * 9.80
                if (finalPrice >= 100 && finalPrice <= 200){
                    finalPrice *= 0.85
                }else if (finalPrice > 200){
                    finalPrice *= 0.75
                }
            }else{
                finalPrice = numOfPastry * 9.80
            }
            break
        case 'Baklava':
            if (day <= 15){
                finalPrice = numOfPastry * 12.60
                if (finalPrice >= 100 && finalPrice <= 200){
                    finalPrice *= 0.85
                }else if (finalPrice > 200){
                    finalPrice *= 0.75
                }
                finalPrice *= 0.90
            }else if (day >= 16 && day <= 22){
                finalPrice = numOfPastry * 16.98
                if (finalPrice >= 100 && finalPrice <= 200){
                    finalPrice *= 0.85
                }else if (finalPrice > 200){
                    finalPrice *= 0.75
                }
            }else{
                finalPrice = numOfPastry * 16.98
            }
            break            
    }
    console.log(finalPrice.toFixed(2))
}

pastryShop(["Cake",
"5",
"12"])
