function histogram(input){

    let num = Number(input[0])
    let p1 = 0    
    let p2 = 0
    let p3 = 0
    let p4 = 0
    let p5 = 0
    let percentage = 0

    for (let i = 1; i <=num; i++){
        let number = Number(input[i])
        if (number < 200){
            p1 ++
        }else if (number >= 200 && number <= 399){
            p2 ++           
        }else if (number >= 400 && number <= 599){
            p3 ++            
        }else if (number >= 600 && number <= 799){
            p4 ++          
        }else if (number >= 800){
            p5 ++           
        }        

    }

    let percentageP1 = (p1 / num) * 100
    let percentageP2 = (p2 / num) * 100
    let percentageP3 = (p3 / num) * 100
    let percentageP4 = (p4 / num) * 100
    let percentageP5 = (p5 / num) * 100

    console.log(`${percentageP1.toFixed(2)}%`)
    console.log(`${percentageP2.toFixed(2)}%`)
    console.log(`${percentageP3.toFixed(2)}%`)
    console.log(`${percentageP4.toFixed(2)}%`)
    console.log(`${percentageP5.toFixed(2)}%`)
    
}

histogram(["7",
"800",
"801",
"250",
"199",
"399",
"599",
"799"])

