function substitute(input){

    let K = Number(input[0])
    let L = Number(input[1])
    let M = Number(input[2])
    let N = Number(input[3])

    let combo = 0
    
    for (let k = K; k <= 8; k++){
        for (let l = 9; l >= L; l --){
            for (let m = M; m <= 8; m++){
                for (let n = 9; n >= N; n --){
                    if (k == m && l == n && k % 2 == 0 && l % 2 != 0){
                        console.log(`Cannot change the same player.`)
                    }else if (k % 2 == 0 && l % 2 != 0 && m % 2 == 0 && n % 2 != 0){
                        console.log(`${k}${l} - ${m}${n}`)
                        combo++
                    }

                    if (combo == 6){
                        break
                    }
                }
            if (combo == 6){
                break
            }
        }
        if (combo == 6){
            break
        }
    }
    if(combo == 6){
        break
    }
}

}

substitute(["7",
"6",
"8",
"5"])
