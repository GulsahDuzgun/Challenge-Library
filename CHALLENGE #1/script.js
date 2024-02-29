const massMark = 78;
const massJohn = 92;
const heightMark = 1.69;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / heightJohn ** 2;

console.log(BMIJohn);
console.log(BMIMark);

const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);
