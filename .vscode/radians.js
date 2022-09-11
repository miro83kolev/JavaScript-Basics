function radians(input){
    const PI = Math.PI
    let radians = Number(input[0])
    let degrees = radians * 180 / PI
    console.log(degrees)
}
radians(["6.2832"])
