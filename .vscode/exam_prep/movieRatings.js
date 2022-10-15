function movieRatings(input){
    let index = 0
    let movieCount = Number(input[index])
    index ++

    let maxRating = Number.MIN_SAFE_INTEGER
    let maxRatingName = ''
    let minRating = Number.MAX_SAFE_INTEGER
    let minRatingName = ''
    let sumRating = 0

    for (let i = 0; i < movieCount; i ++){
        let movieName = input[index]
        index ++
        let rating = Number(input[index])
        index ++

        sumRating += rating

        if (rating > maxRating){
            maxRating = rating
            maxRatingName = movieName
        }
        
        if (rating < minRating){
            minRating = rating
            minRatingName = movieName
        }
    }

    let avgRating = sumRating / movieCount

    console.log(`${maxRatingName} is with highest rating: ${maxRating.toFixed(1)}`)
    console.log(`${minRatingName} is with lowest rating: ${minRating.toFixed(1)}`)
    console.log(`Average rating: ${avgRating.toFixed(1)}`)
}

movieRatings(["3",
"Interstellar",
"8.5",
"Dangal",
"8.3",
"Green Book",
"8.2"])

