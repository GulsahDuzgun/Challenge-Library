const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = new Array();

const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

for (let i = 0; i < bills.length; i++) {
  let temp = calcTip(bills[i]);

  tips.push(temp);
  totals.push(temp + bills[i]);
}

// for (let i = 0; i < bills.length; i++) {
//   totals[i] = bills[i] + tips[i];
// }

console.log(tips);
console.log(bills);
console.log(totals);

const calcAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage(totals));
