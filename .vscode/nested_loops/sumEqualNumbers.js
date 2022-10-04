function solve(input){

    let num1 = input[0]
    let num2 = input[1]

    let output = ''

    for (let i = num1; i <= num2; i++){
        let numberToSting = i.toString()

        let evenSum = 0
        let oddSum = 0

        for (let index = 0; index < numberToSting.length; index ++){
            let currentDigit = Number(numberToSting[index])
            let position = index + 1

            if (position % 2 === 0){
                evenSum += currentDigit
            }else{
                oddSum += currentDigit
            }

        }

        if (evenSum === oddSum){
            output += `${numberToSting} `
        }
    }
    console.log(output)
}

solve(["100115",
"100120"])
