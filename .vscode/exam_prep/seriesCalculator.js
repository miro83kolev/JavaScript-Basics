function calculatorSeries(input){

    let nameSeries = input[0]
    let seasons = Number(input[1])
    let episodes = Number(input[2])
    let timeOfOneEpisode = Number(input[3])

    let commercials = timeOfOneEpisode * 0.20
    let totalTimeEpisode = timeOfOneEpisode + commercials
    let specialEpisodeTime = seasons * 10

    let totalTimeToWatch = totalTimeEpisode * episodes * seasons + specialEpisodeTime

    console.log(`Total time needed to watch the ${nameSeries} series is ${totalTimeToWatch} minutes.`)
}

calculatorSeries(["Riverdale",
"3",
"21",
"45"])

