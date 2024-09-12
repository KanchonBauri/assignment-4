function calculateTax(income, expenses) {
    if (0 >= income || 0 >= expenses) {
        return "Invalid Input";
    }
    else if (income < expenses) {
        return "Invalid Input";
    }
    else {
        const z = income - expenses;
        const withOutText = z * .20;
        return withOutText;
    }
}

const m = calculateTax(10000, 3000);
const n = calculateTax(34000, 1753);
const o = calculateTax(5000, 1500);
const m2 = calculateTax(7000, 7000);
const n2 = calculateTax(-5000, 2000);
const o2 = calculateTax(6000, -1500);

console.log(m); //output- 1400
console.log(n); //output- 6449.400000000001
console.log(o); //output- 700
console.log(m2); //output- 0
console.log(n2); //output- Invalid Input
console.log(o2); //output- Invalid Input
