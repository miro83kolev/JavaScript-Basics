function eggs(input){

    let size = input[0]
    let color = input[1]
    let number = Number(input[2])

    let finalSum = 0

    switch(size){
        case 'Large': 
            switch(color){
                case 'Red': 
                    finalSum = number * 16
                    break
                case 'Green': 
                    finalSum = number * 13
                    break
                case 'Yellow': 
                    finalSum = number * 9
                    break
            }
        
            break
        case 'Medium': 
            switch(color){
                case 'Red': 
                    finalSum = number * 13
                    break
                case 'Green': 
                    finalSum = number * 9
                    break
                case 'Yellow': 
                    finalSum = number * 7
                    break
        }
            
            break
        case 'Small': 
            switch(color){
                case 'Red': 
                    finalSum = number * 9
                    break
                case 'Green': 
                    finalSum = number * 8
                    break
                case 'Yellow': 
                    finalSum = number * 5
                    break
        }
            break
    }

    let expenses = finalSum * 0.35
    let finalPrice = finalSum - expenses
    console.log(`${finalPrice.toFixed(2)} leva.`)
}

eggs(["Small",
"Yellow",
"3"])
