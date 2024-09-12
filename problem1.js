function calculateTex(income, expense) {
    if (0 >= income || 0 >= expense) {
        return "Invalid Input";
    }
    else if (income < expense) {
        return "Invalid Input";
    }
    else {
        const z = income - expense;
        const withOutText = z * .20;
        return withOutText;
    }
}

const m = calculateTex(10000, 3000);
const n = calculateTex(34000, 1753);
const o = calculateTex(5000, 1500);
const m2 = calculateTex(7000, 7000);
const n2 = calculateTex(-5000, 2000);
const o2 = calculateTex(6000, -1500);

console.log(m); //output- 1400
console.log(n); //output- 6449.400000000001
console.log(o); //output- 700
console.log(m2); //output- 0
console.log(n2); //output- Invalid Input
console.log(o2); //output- Invalid Input
