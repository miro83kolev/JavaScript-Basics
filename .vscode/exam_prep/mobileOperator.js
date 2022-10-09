function mobile(input){

    let contract = input[0]
    let contractType = input[1]
    let mobileInternet = input[2]
    let months = Number(input[3])

    let finalPrice = 0

    switch (contract){
        case 'one':
            switch (contractType){
                case 'Small':
                    if (mobileInternet == 'yes'){
                        finalPrice = (months * 9.98) + (5.50 * months)
                    }else{
                        finalPrice = months * 9.98
                    }
                    break
                case 'Middle':
                    if (mobileInternet == 'yes'){
                        finalPrice = (months * 18.99) + (4.35 * months)
                    }else{
                        finalPrice = months * 18.99
                    }
                    break
                case 'Large':
                    if (mobileInternet == 'yes'){
                        finalPrice = (months * 25.98) + (4.35 * months)
                    }else{
                        finalPrice = months * 25.98
                    }
                    break
                case 'ExtraLarge':
                    if (mobileInternet == 'yes'){
                        finalPrice = (months * 35.99) + (3.85 * months)
                    }else{
                        finalPrice = months * 35.99
                    }
                    break
            }
            break
        case 'two':
            switch (contractType){
                case 'Small':
                    if (mobileInternet == 'yes'){
                        finalPrice = (months * 8.58) + (5.50 * months)
                        finalPrice *= 0.9625
                    }else{
                        finalPrice = months * 8.58
                        finalPrice *= 0.9625
                    }
                    break
                case 'Middle':
                    if (mobileInternet == 'yes'){
                        finalPrice = (months * 17.09) + (4.35 * months)
                        finalPrice *= 0.9625
                    }else{
                        finalPrice = months * 17.09
                        finalPrice *= 0.9625
                    }
                    break
                case 'Large':
                    if (mobileInternet == 'yes'){
                        finalPrice = (months * 23.59) + (4.35 * months)
                        finalPrice *= 0.9625
                    }else{
                        finalPrice = months * 23.59
                        finalPrice *= 0.9625
                    }
                    break
                case 'ExtraLarge':
                    if (mobileInternet == 'yes'){
                        finalPrice = (months * 31.79) + (3.85 * months)
                        finalPrice *= 0.9625
                    }else{
                        finalPrice = months * 31.19
                        finalPrice *= 0.9625
                    }
                    break
            }
            break
    }
    console.log(`${finalPrice.toFixed(2)} lv.`)
}

mobile(["two",
"Small",
"yes",
"20"])
