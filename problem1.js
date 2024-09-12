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
// let x = 6000;
// let y = -1500;
const m = calculateTex(10000, 3000);
const n = calculateTex(34000, 1753);
const o = calculateTex(5000, 1500);
const m2 = calculateTex(7000, 7000);
const n2 = calculateTex(-5000, 2000);
const o2 = calculateTex(6000, -1500);
console.log(m);
console.log(n);
console.log(o);
console.log(m2);
console.log(n2);
console.log(o2);