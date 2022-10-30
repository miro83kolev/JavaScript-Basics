function grandpa(input){

    let days = Number(input[0])
    let index = 1

    let totalRakia = 0
    let totalDegress = 0    

    for (let day = 1; day <= days; day ++){
        let quantity = Number(input[index])
        index++
        let degree = Number(input[index])
        index ++

        totalRakia += quantity
        totalDegress += (quantity * degree)

    }

    let avgDegree = totalDegress / totalRakia

    console.log(`Liter: ${totalRakia.toFixed(2)}`)
    console.log(`Degrees: ${avgDegree.toFixed(2)}`)

    if (avgDegree < 38){
        console.log(`Not good, you should baking!`)
    }else if (avgDegree >= 38 && avgDegree <= 42){
        console.log(`Super!`)
    }else if (avgDegree > 42){
        console.log(`Dilution with distilled water!`)
    }
}

grandpa(["3",
"100",
"45",
"50",
"55",
"150",
"36"])
