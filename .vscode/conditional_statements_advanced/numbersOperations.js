function numbersOperation(input){

    let n1 = Number(input[0])
    let n2 = Number(input[1])
    let operand = input[2]

    let result = 0
    let evenOdd = ''

    if (operand == '+'){
        result = n1 + n2
        if (result % 2 == 0){
            evenOdd = 'even'
        }else{
            evenOdd = 'odd'
        }
    console.log(`${n1} ${operand} ${n2} = ${result} - ${evenOdd}`)
    }else if (operand == '-'){        
        result = n1 - n2
        if (result % 2 == 0){
            evenOdd = 'even'
        }else{
            evenOdd = 'odd'
        }
    console.log(`${n1} ${operand} ${n2} = ${result} - ${evenOdd}`)
    }else if (operand == '*'){
        result = 1 * (n1 * n2)
        if (result % 2 == 0){
            evenOdd = 'even'
        }else{
            evenOdd = 'odd'
        }
    console.log(`${n1} ${operand} ${n2} = ${result} - ${evenOdd}`)
    }else if (operand == '/'){
        if (n2 == 0){
            console.log(`Cannot divide ${n1} by zero`)
        }else{        
        result = (n1 / n2).toFixed(2)
        console.log(`${n1} / ${n2} = ${result}`)
        }
    }else if (operand == '%'){
        if (n2 == 0){
            console.log(`Cannot divide ${n1} by zero`)
        }else{
        result = n1 % n2
        console.log(`${n1} % ${n2} = ${result}`)
        }
    }

}
numbersOperation(["7",
"3",
"*"])
