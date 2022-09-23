function hotelRoom(input){

    let month = input[0]
    let numberOfNights = Number(input[1])

    let finalStudioPrice = 0
    let finalApartmentPrice = 0

    if (month == 'May' || month == 'October'){
        finalStudioPrice = numberOfNights * 50
        finalApartmentPrice = numberOfNights * 65

        if (numberOfNights > 7 && numberOfNights <= 14){
            finalStudioPrice = finalStudioPrice * 0.95
        }else if (numberOfNights > 14){
            finalStudioPrice = finalStudioPrice * 0.70
            finalApartmentPrice = finalApartmentPrice * 0.90
        }
    }else if (month == 'June' || month == 'September'){
        finalStudioPrice = numberOfNights * 75.20
        finalApartmentPrice = numberOfNights * 68.70

        if (numberOfNights > 14){
            finalStudioPrice = finalStudioPrice * 0.80
            finalApartmentPrice = finalApartmentPrice * 0.90
        }
    }else if (month == 'July' || month == 'August'){
        finalStudioPrice = numberOfNights * 76
        finalApartmentPrice = numberOfNights * 77

        if (numberOfNights > 14){
            finalApartmentPrice = finalApartmentPrice * 0.90
        }
    }
    console.log(`Apartment: ${finalApartmentPrice.toFixed(2)} lv.`)
    console.log(`Studio: ${finalStudioPrice.toFixed(2)} lv.`)
}

hotelRoom(["May",
"15"])

