function movieStars(input){

    let budget = Number(input[0])
    let index = 1

    let command = input[index]
    index ++
    let diff = 0

    while (command !== 'ACTION'){
        let actorName = command

        if (actorName.length <= 15){            
            let actorSalary = Number(input[index])
            index ++
            if (budget > actorSalary){
                budget -= actorSalary
            }else{
                diff = Math.abs(actorSalary - budget)
                break
            }
            

        }else{
            actorSalary = budget * 0.20
            if (budget > actorSalary){
                budget -= actorSalary
            }else{
                diff = Math.abs(actorSalary - budget)
                break
            }            
        }

        command = input[index]
        index ++
    }    
        
    if (diff > 0 && command != 'ACTION'){
        console.log(`We need ${diff.toFixed(2)} leva for our actors.`)        
    }
    if (budget >= 0 && command === 'ACTION'){
        console.log(`We are left with ${budget.toFixed(2)} leva.`)
    }      
    
}

movieStars(["90000",
"Christian Bale",
"70000.50",
"Leonard DiCaprio",
"Kevin Spacey",
"24000.99"])
