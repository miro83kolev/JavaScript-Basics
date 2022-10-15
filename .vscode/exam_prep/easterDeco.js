function easterDeco(input){
    let index = 0
    let n = Number(input[index])
    index ++

    let totalSum = 0

    for (let i = 0; i < n; i ++){
        let command = input[index]
        index ++

        let count = 0
        let sum = 0

        while (command !== 'Finish'){
            let type = command
            count ++

            switch (type){
                case 'basket': 
                    sum += 1.50
                    break
                case 'wreath':
                    sum += 3.80
                    break
                case 'chocolate bunny':
                    sum += 7
                    break
            }

            command = input[index]
            index ++
        }

        if (count % 2 === 0){
            sum *= 0.80
        }
        totalSum += sum

        console.log(`You purchased ${count} items for ${sum.toFixed(2)} leva.`)
    }
    let avgSum = totalSum / n

    console.log(`Average bill per client is: ${avgSum.toFixed(2)} leva.`)
}

easterDeco(["1",
"basket",
"wreath",
"chocolate bunny",
"wreath",
"basket",
"chocolate bunny",
"Finish"])
