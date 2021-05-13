

function LeapYear(year){


     if((year %400 === 0) || (year% 100 !=0 && year %4==0)){
             document.write(`${year} is leap year`)
     }
     else {
        document.write(`${year} is not leap year`)
     
     }

}

LeapYear(2000)