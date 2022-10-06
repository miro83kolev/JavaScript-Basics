function fitnessCard(input){

    let budget = Number(input[0])
    let sex = input[1]
    let age = Number(input[2])
    let sport = input[3]
    
    let finalSum = 0

    switch (sex){
        case 'm':
            switch (sport){
                case 'Gym':
                    finalSum = 42
                    if (age <= 19){
                        finalSum *= 0.80
                    }
                    break
                case 'Boxing':
                    finalSum = 41
                    if (age <= 19){
                        finalSum *= 0.80
                    }
                    break
                case 'Yoga': 
                    finalSum = 45
                    if (age <= 19){
                        finalSum *= 0.80
                    }
                    break
                case 'Zumba':
                    finalSum = 34
                    if (age <= 19){
                        finalSum *= 0.80
                    }
                    break
                case 'Dances': 
                    finalSum = 51
                    if (age <= 19){
                        finalSum *= 0.80
                    }
                    break
                case 'Pilates':
                    finalSum = 39
                    if (age <= 19){
                        finalSum *= 0.80
                    } 
                    break

            }
            break
        case 'f':
            switch (sport){
                case 'Gym':
                    finalSum = 35
                    if (age <= 19){
                        finalSum *= 0.80
                    }
                    break
                case 'Boxing':
                    finalSum = 37
                    if (age <= 19){
                        finalSum *= 0.80
                    }
                    break
                case 'Yoga': 
                    finalSum = 42
                    if (age <= 19){
                        finalSum *= 0.80
                    }
                    break
                case 'Zumba':
                    finalSum = 31
                    if (age <= 19){
                        finalSum *= 0.80
                    }
                    break
                case 'Dances': 
                    finalSum = 53
                    if (age <= 19){
                        finalSum *= 0.80
                    }
                    break
                case 'Pilates':
                    finalSum = 37
                    if (age <= 19){
                        finalSum *= 0.80
                    } 
                    break

            }
            break
    }

    if (budget >= finalSum){
        console.log(`You purchased a 1 month pass for ${sport}.`)
    }else{
        console.log(`You don't have enough money! You need \$${(finalSum - budget).toFixed(2)} more.`)
    }
}

fitnessCard(["10",
"m",
"50",
"Pilates"])
