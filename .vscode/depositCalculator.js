function depositCalculator(input){
    let depositSum = Number(input[0])
    let depositPeriod = Number(input[1])
    let yearInterest = Number(input[2])
    let totalYearInterestAccumulated = depositSum * (yearInterest/100)
    let monthlyInterest = totalYearInterestAccumulated/12
    let finalSum = depositSum + (depositPeriod * monthlyInterest)
    console.log(finalSum)
}
depositCalculator(["2350",
"6 ",
"7 "]
)