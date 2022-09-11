function fishTank(input){

    let length = Number(input[0])
    let width = Number(input[1])
    let height = Number(input[2])
    let percent = Number(input[3])

    let totalAquariumCm = length * width *height
    let totalAquariumLitters = totalAquariumCm / 1000
    let occupiedSpace = percent / 100
    let finalNeededLitters  = totalAquariumLitters * (1 - occupiedSpace)
    console.log(finalNeededLitters)

}
fishTank(["105 ",
"77 ",
"89 ",
"18.5 "]
)