function jump(input){

    let index = 0
    let target = input[index]
    index ++
    let isFailed = false
    let currentPosition = target - 30
    let counter = 0

    while(currentPosition <= target){        

        for (let i = 0; i < 3; i++){
            counter ++
            isFailed = true
            let height = Number(input[index])
            index ++

            if (currentPosition < height){
                isFailed = false
                currentPosition += 5                
                break
            }

        }
        if (isFailed){
            break
        }
    }
    if (isFailed){
        console.log(`Tihomir failed at ${currentPosition}cm after ${counter} jumps.`)
    }else{
        console.log(`Tihomir succeeded, he jumped over ${target}cm after ${counter} jumps.`)
    }
    
}

jump(["231",
"205",
"212",
"213",
"228",
"229",
"230",
"235"])

