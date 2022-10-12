function division(input){

    let num = Number(input[0])

    let counter2 = 0
    let counter3 = 0
    let counter4 = 0

    for (let index = 1; index <= num; index ++){
        nextNum = input[index]

        if (nextNum % 2 == 0){
            counter2 ++
        }
        if (nextNum % 3 == 0){
            counter3++
        }
        if (nextNum % 4 == 0){
            counter4 ++
        }

    }

    let percentageDiv2 = counter2/num * 100
    let percentageDiv3 = counter3/num * 100
    let percentageDiv4 = counter4/num * 100

    console.log(`${percentageDiv2.toFixed(2)}%`)
    console.log(`${percentageDiv3.toFixed(2)}%`)
    console.log(`${percentageDiv4.toFixed(2)}%`)
}

division(["3",
"3",
"6",
"9"])


