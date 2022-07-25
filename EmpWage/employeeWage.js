const IS_Part_Time=2;
const IS_Full_Time=1;
const part_Time_Hr=4;
const full_time_hr=8;
const wage_per_Hr=20;

let empHr=0;
let empcheck=Math.floor(Math.random()*10)%3;
function getWorkingHr(empcheck) {
    switch (empcheck) {
        case IS_Full_Time: return full_time_hr;
            
            break;
        case IS_Part_Time: return part_Time_Hr;
                break;
        default: return 0;
            break;
    }
    
}
empHr=getWorkingHr(empcheck);
let empWage=empHr*wage_per_Hr;
console.log("Employe Daily Wage IS : "+empWage);