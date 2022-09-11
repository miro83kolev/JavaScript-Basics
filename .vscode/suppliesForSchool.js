function suppliesForSchool(input){

    const packOfPens = 5.80
    const packOfMarkers = 7.20
    const detergent = 1.20

    let numberPackOfPens = Number(input[0])
    let numberPackOfMarkers = Number(input[1])
    let littersOfDetergent = Number(input[2])
    let discount = Number(input[3])

    let totalPrice = (numberPackOfPens * packOfPens) + (numberPackOfMarkers * packOfMarkers) + (littersOfDetergent * detergent)
    let finalSum = totalPrice - (totalPrice * (discount/100))
    console.log(finalSum)
}
suppliesForSchool(["4 ",
"2 ",
"5 ",
"13 "]
)