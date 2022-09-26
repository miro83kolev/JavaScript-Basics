function salary(input) {
 
    //let nOpenTabs = Number(input[0]) ;
    //let salary = Number(input[1]) ;

    let nOpenTabs = Number(input.shift()) 
    let salary = Number(input.shift())
 
    for (let i = 0; i < nOpenTabs; i++ ) {
 
    //for (let i = 1; i <= nOpenTabs + 1; i++ ) {
 
       let tab = String(input[i]);
 
        if ( tab == `Facebook` ) {
 
            salary -= 150
            
 
        }
        if ( tab == `Instagram` ) {
 
            salary -= 100
 
        }
        if ( tab == `Reddit` ) {
 
            salary -= 50
 
        }
 
        if ( salary <= 0 ) {
 
            console.log(`You have lost your salary.`)
            break;
    
          }
 
        
       } // end of for
 
      if (salary != 0 ) {
        console.log(salary)
      }
 
 
    }

salary(["3",
"500",
"Facebook",
"Stackoverflow.com",
"softuni.bg"])




