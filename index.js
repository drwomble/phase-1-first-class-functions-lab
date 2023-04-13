// Code your solution in this file!
let driversForScuber = ["Antonia", "Nuru", "Amari", "Mo"]; 

const returnFirstTwoDrivers = function(drivers) {
 drivers = ["Antonia", "Nuru", "Amari", "Mo"];  
return  drivers.slice(0, 2);
}
const returnLastTwoDrivers = function(drivers) {
    drivers = ["Antonia", "Nuru", "Amari", "Mo"];  
    return  drivers.slice(2, 4);
   }
   const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

   const createFareMultiplier = (num1) => (num2) => num1 * num2;

   result = createFareMultiplier(num1)(4);

   //const fareDoubler = createFareMultiplier()(2);
//    const fareDoubler = num1 => num2 => num1 * num2;

//    resultForDoubler = fareDoubler(num1)(2);
function fareDoubler(num3, num4){
    num4 = 2;
    return (num3 * num4);
}
function fareTripler(num5) {
    return (num5 * 3);
}
function selectDifferentDrivers(drivers, returnDrivers){
    drivers = driversForScuber;
    if (returnDrivers === returnFirstTwoDrivers){
        returnDrivers = returnFirstTwoDrivers();
    }
    else {
        returnDrivers = returnLastTwoDrivers();
    }
    return returnDrivers;
}