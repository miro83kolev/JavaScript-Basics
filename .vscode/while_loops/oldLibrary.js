function oldLibrary(input){

    let favoriteBook = input[0]
    let index = 1
    let bookIsFound = false

    let nextBook = input[index]

    while (nextBook != 'No More Books'){
        if (nextBook == favoriteBook){
            bookIsFound = true
            break
        }
        index ++
        nextBook = input[index]
    }
    if (bookIsFound){
        console.log(`You checked ${index - 1} books and found it.`)
    }else{
        console.log(`The book you search is not here!`)
        console.log(`You checked ${index - 1} books.`)
    }
}

oldLibrary(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])
