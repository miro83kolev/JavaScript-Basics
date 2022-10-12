function cinema(input){

    let capacity = Number(input[0])
    let index = 1

    let command = input[index]
    index ++
    const ticket = 5

    let totalSum = 0

    while (command !== 'Movie time!'){
        let people = Number(command)

        if (capacity < people){
            console.log(`The cinema is full.`)
            break
        }

        if (people % 3 == 0){
            totalSum += people * ticket - 5
            capacity -= people
        }else{
            totalSum += people * ticket
            capacity -= people
        }



        command = input[index]
        index ++
    }

    if (command === 'Movie time!'){
        console.log(`There are ${capacity} seats left in the cinema.`)        
    }
    console.log(`Cinema income - ${totalSum} lv.`)

}

cinema(["100",
"10",
"10",
"10",
"10",
"10",
"10",
"10",
"10",
"10",
"10",
"Movie time!"])
