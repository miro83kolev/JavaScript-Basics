function pyramid (input){

    let n = Number(input[0])
    let current = 1
    let isBigger = false   

    for (let rows = 1; rows <= n; rows ++){
        let printCurrentLine = ''
        for (let cols = 0; cols < rows; cols ++){
            printCurrentLine += current + ' '
            current ++
            if (current > n){
                isBigger = true
                break
            }                      
        }
                
        console.log(printCurrentLine)     
        printCurrentLine = ''   
        if(isBigger){
        break    
        }
    }   

}

pyramid(['12'])