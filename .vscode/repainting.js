function repainting(input){

    const nylonPrice = 1.50
    const paintPrice = 14.50
    const paintDetergent = 5.00

    let neededNylon = Number(input[0])
    let neededPaint = Number(input[1])
    let neededPaintDetergent = Number(input[2])
    let neededHours = Number(input[3])

    let totalSumMaterials = ((neededNylon + 2) * nylonPrice) + ((neededPaint + neededPaint * 0.10) * paintPrice) + (neededPaintDetergent * paintDetergent) + 0.40
    let totalSumWorkers = (totalSumMaterials * 0.30) * neededHours
    let finalSum = totalSumMaterials + totalSumWorkers
    console.log(finalSum)
}
repainting(["5 ",
"10 ",
"10 ",
"1 "]
)