const IS_Part_Time=2;
const IS_Full_Time=1;
const part_Time_Hr=4;
const full_time_hr=8;
const wage_per_Hr=20;
const max_Working_days=20;
const max_working_Hr=160;

let empHr=0;
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
total_empDay=0;
total_empHr=0;
do {
    total_empDay++;
    let empcheck=Math.floor(Math.random()*10)%3;
    total_empHr +=getWorkingHr(empcheck);
    
} while (total_empHr<=max_working_Hr && total_empDay<max_Working_days);
let empWage=total_empHr*wage_per_Hr;
console.log("Total Days: "+total_empDay+" TotalHr: "+total_empHr+" Employe Daily Wage IS : "+empWage);