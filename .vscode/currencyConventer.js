function conventer(input){
    const BGN_TO_USD = 1.79549
    let usd = Number(input[0])
    let bgn = usd * BGN_TO_USD
    console.log(bgn)
}
conventer(["12.5"])