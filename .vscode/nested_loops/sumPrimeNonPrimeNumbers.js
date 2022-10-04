function sumPrime(input){

    let index = 0
    let command = input[index]
    index ++

    let sumPrime = 0
    let sumNonPrime = 0

    while (command !== 'stop'){
        let num = Number(command)

        if (num < 0){
            console.log('Number is negative.')
            command = input[index]
            index ++
            continue
        }

        if (num === 1){
            sumPrime += 1
            command = input[index]
            index ++
            continue
        }

        let isPrime = true
        for (let i = 2; i < num; i ++){
            if (num % i === 0){
                sumNonPrime += num
                let isPrime = false
                break
            }
        }

        if (isPrime){
            sumPrime += num
        }
        command = input[index]
        index ++
    }

    console.log(`Sum of all prime numbers is: ${sumPrime}`)
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`)
}

sumPrime(["0",
"-9",
"0",
"stop"])

