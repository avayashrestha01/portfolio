const birthDayString = "2010-11-12";

const birthDate = new Date(birthDayString);
const currentDate = new Date();

age = currentDate.getFullYear() - birthDate.getFullYear();
const monthDiffer = currentDate.getMonth() - birthDate.getMonth(); // 06-02 06-12

if (monthDiffer < 0 || (monthDiffer === 0 && currentDate.getDate() < birthDate.getDate())){
    age--;
}

document.body.innerText = age;