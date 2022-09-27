function graduation(input){
        let index = 0
        let name = input[index]
        index ++
        let negativeCount = 0
        let sumGrades = 0
        let classNumber = 1
        let hasBeenExcluded = false

        while (classNumber <= 12){
            let currentGrade = Number(input[index])
            index ++
            if (currentGrade < 4){
                negativeCount++
                if (negativeCount == 2){
                    hasBeenExcluded = true;
                    break;
                    }
            continue;                
        }
        sumGrades += currentGrade
        classNumber ++
        }

        let avgGrade = sumGrades /12

        if (hasBeenExcluded){
            console.log(`${name} has been excluded at ${classNumber} grade`)
        }else{
            console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`)
        }   
    }     

graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])

