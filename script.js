const dateOfBirth = new Date("2010-11-12");
const today = new Date();

let currentAge = today.getFullYear - dateOfBirth.getFullYear;
const monthDiffer = today.getMonth - dateOfBirth.getMonth; // 06-02 06-12

if (monthDiffer < 0 || (monthDiffer === 0 && today.getDate < dateOfBirth.getDate)){
    currentAge
}

document.body.innerText = currentAge;