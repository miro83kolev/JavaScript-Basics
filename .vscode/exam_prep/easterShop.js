function easterShop(input){

    let stockOfEggs = Number(input[0])
    let index = 1

    let command = input[index]
    index ++

    let soldEggs = 0

    while (command !== 'Close'){
        let action = command       

        let eggs = Number(input[index])
        index ++
       

        if (stockOfEggs < 0){
            console.log("Not enough eggs in store!")
            console.log(`You can buy only ${stockOfEggs}.`)
            break
        }

        if (action == 'Buy'){
            soldEggs += eggs
            stockOfEggs -= eggs
            
        }

        if (action == 'Fill'){
            stockOfEggs += eggs
        }


        command = input[index]
        index ++
    }

    if (command == 'Close'){
        console.log(`Store is closed!`)
        console.log(`${soldEggs} eggs sold.`)
    }
}

easterShop(["20",
"Fill",
"30",
"Buy",
"15",
"Buy",
"20",
"Close"])
