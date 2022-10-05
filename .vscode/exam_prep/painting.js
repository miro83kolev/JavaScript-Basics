function painting(input){

    let heightWall = input[0]
    let widthWall = input[1]
    let percentage = input[2]

    let index = 3

    let command = input[index]
    index ++

    let totalWall = heightWall * widthWall * 4
    let totalWallToPaint = Math.ceil(totalWall - (totalWall * (percentage / 100)))
    let isFinish = false


    while (command !== 'Tired!'){
        let currentSqMeters = Number(command)            
        totalWallToPaint -= currentSqMeters

        if (totalWallToPaint <= 0){
            if (totalWallToPaint < 0 ){
                console.log(`All walls are painted and you have ${Math.abs(totalWallToPaint)} l paint left!`)
            }else{
                console.log('All walls are painted! Great job, Pesho!')
            }
            isFinish = true
            break
        }    
           
                     
        command = input[index]
        index ++
    }  
    if (!isFinish){
        console.log(`${totalWallToPaint} quadratic m left.`)    
    }
    
}

painting(["2",
"3",
"25",
"6",
"7",
"8"])


