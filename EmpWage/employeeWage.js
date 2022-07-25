const IS_Part_Time=2;
const IS_Full_Time=1;
const part_Time_Hr=4;
const full_time_hr=8;
const wage_per_Hr=20;

let empHr=0;
let empcheck=Math.floor(Math.random()*10)%3;

switch (empcheck) {
    case IS_Full_Time: empHr=full_time_hr;
        
        break;
    case IS_Part_Time: empHr=part_Time_Hr;
            break;
    default: empHr=0;
        break;
}

let empWage=empHr*wage_per_Hr;
console.log("Employe Daily Wage IS : "+empWage);