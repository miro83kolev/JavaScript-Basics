function skiVacation(input){

    const roomOnePerson = 18.00
    const apartment = 25.00
    const presidentApartment = 35.00

    let vacationPeriod = Number(input[0])
    let room = input[1]
    let feedback = input[2]
    let nights = vacationPeriod - 1

    let totalSumOfStay = 0

    if (room == 'room for one person'){
        totalSumOfStay = roomOnePerson * nights
        if (feedback == 'positive'){
            totalSumOfStay = totalSumOfStay + (totalSumOfStay * 0.25)            
        }else if (feedback == 'negative'){
            totalSumOfStay = totalSumOfStay - (totalSumOfStay * 0.10)
        }
    }else if(room == 'apartment'){
        totalSumOfStay = apartment * nights
        if (vacationPeriod <= 10){            
            totalSumOfStay = totalSumOfStay * 0.70
            if (feedback == 'positive'){
                totalSumOfStay = totalSumOfStay + (totalSumOfStay * 0.25)            
            }else if (feedback == 'negative'){
                totalSumOfStay = totalSumOfStay - (totalSumOfStay * 0.10)
            }
        }else if (vacationPeriod > 10 && vacationPeriod <= 15 ){
            totalSumOfStay = totalSumOfStay * 0.65
            if (feedback == 'positive'){
                totalSumOfStay = totalSumOfStay + (totalSumOfStay * 0.25)            
            }else if (feedback == 'negative'){
                totalSumOfStay = totalSumOfStay - (totalSumOfStay * 0.10)
            }
        }else if (vacationPeriod > 15){
            totalSumOfStay = totalSumOfStay * 0.50
            if (feedback == 'positive'){
                totalSumOfStay = totalSumOfStay + (totalSumOfStay * 0.25)            
            }else if (feedback == 'negative'){
                totalSumOfStay = totalSumOfStay - (totalSumOfStay * 0.10)
            }
        }
    }else if (room == 'president apartment'){
        totalSumOfStay = presidentApartment * nights
        if (vacationPeriod <= 10){            
            totalSumOfStay = totalSumOfStay * 0.90
            if (feedback == 'positive'){
                totalSumOfStay = totalSumOfStay + (totalSumOfStay * 0.25)            
            }else if (feedback == 'negative'){
                totalSumOfStay = totalSumOfStay - (totalSumOfStay * 0.10)
            }
        }else if (vacationPeriod > 10 && vacationPeriod <= 15 ){
            totalSumOfStay = totalSumOfStay * 0.85
            if (feedback == 'positive'){
                totalSumOfStay = totalSumOfStay + (totalSumOfStay * 0.25)            
            }else if (feedback == 'negative'){
                totalSumOfStay = totalSumOfStay - (totalSumOfStay * 0.10)
            }
        }else if (vacationPeriod > 15){
            totalSumOfStay = totalSumOfStay * 0.80
            if (feedback == 'positive'){
                totalSumOfStay = totalSumOfStay + (totalSumOfStay * 0.25)            
            }else if (feedback == 'negative'){
                totalSumOfStay = totalSumOfStay - (totalSumOfStay * 0.10)
            }
        }
    
    }
    console.log(totalSumOfStay.toFixed(2))
}

skiVacation(["2",
"apartment",
"positive"])
