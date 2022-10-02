
function leapYear(year){
    if((year % 4 == 0) && (year % 100 !=0) || (year % 400 == 0)){
        console.log("It's a Leap Year!");
    }
    else{
        console.log("Not a Leap Year");
    }
};

const myYear = 2024;
const checkYear = leapYear(myYear);