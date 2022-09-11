function vacationBookList(input){

    let numberOfPages = Number(input[0])
    let pagesPerHour = Number(input[1])
    let numberOfDays = Number(input[2])
    let totalTimeToReadTheBook = numberOfPages/pagesPerHour
    let neededHoursPerDay = totalTimeToReadTheBook / numberOfDays
    console.log(neededHoursPerDay)

}
vacationBookList(["432 ",
"15 ",
"4 "]
)