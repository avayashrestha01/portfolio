const DOB = new Date("2010-11-12");
const currentDate = new Date();

const age = currentDate.getFullYear - DOB.getFullYear;
const monthDiffer = currentDate.getMonth - DOB.getMonth; // 06-02 06-12

if (monthDiffer < 0 || (monthDiffer === 0 && currentDate.getDate < DOB.getDate)){
    age--;
}