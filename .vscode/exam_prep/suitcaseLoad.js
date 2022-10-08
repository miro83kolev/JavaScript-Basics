function suitecaseLoad(input){

    let capacity = Number(input[0])

    let index = 1
    let command = input[index]
    index ++
    let counter = 0

    while (command !== 'End'){
        let load = Number(command)        

        if (counter == 3){
            load *= 1.1
        }

        if (capacity >= load){
            capacity -= load
        }else{
            break
        }        

        counter ++
        command = input[index]
        index ++
     }

     if (command === 'End' && capacity >= 0){
        console.log(`Congratulations! All suitcases are loaded!`)
        console.log(`Statistic: ${counter} suitcases loaded.`)
     }else {
        console.log(`No more space!`)
        console.log(`Statistic: ${counter} suitcases loaded.`)
     }
}

suitecaseLoad(["550",
"100",
"252",
"72",
"End"])

