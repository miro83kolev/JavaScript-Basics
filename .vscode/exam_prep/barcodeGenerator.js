function barcode(input){

    let start = Number(input[0])
    let finish = Number(input[1])

    let firstStart = Math.trunc(start /1000)
    let secondStart = Math.trunc((start / 100) % 10)
    let thirdStart = Math.trunc((start / 10) % 10)
    let fourthStart = Math.trunc(start % 10)

    let firstFinish = Math.trunc(finish / 1000)
    let secondFinish = Math.trunc((finish / 100) % 10)
    let thirdFinish = Math.trunc((finish / 10) % 10)
    let fourthFinish = Math.trunc(finish % 10)

    let output = ''



    for (let i = firstStart; i <= firstFinish; i++){
        for (let j = secondStart; j <= secondFinish; j++){
            for (let k = thirdStart; k <= thirdFinish; k++){
                for (let l = fourthStart; l <= fourthFinish; l++){
                    if (i % 2 != 0 && j % 2 != 0 && k % 2 != 0 & l % 2 != 0){
                        output +=`${i}${j}${k}${l} `
                    }
                }
            }
        }
    }
    console.log(output)
}

barcode(["3256",
"6579"])
