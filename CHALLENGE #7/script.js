const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

if (john.calcBMI() > mark.calcBMI()) {
  console.log(
    `John Smith's BMI (${john.bmi}) is higher than Mark Miller's (${mark.bmi})!`
  );
} else if (mark.bmi > john.bmi) {
  console.log(
    `Mark Miller's BMI (${mark.bmi}) is higher than John Smith's (${john.bmi})!`
  );
} else {
  console.log(`Their BMI's are even.`);
}
