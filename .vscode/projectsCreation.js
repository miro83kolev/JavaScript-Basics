function projectsCreation(input){
    let name = input[0]
    let numbersOfProjects = Number(input[1])
    const PROJECT_TIME = 3
    let totalHours = numbersOfProjects * PROJECT_TIME
    console.log(`The architect ${name} will need ${totalHours} hours to complete ${numbersOfProjects} project/s.`)
}
projectsCreation(["Sanya ",
"9 "]
)
