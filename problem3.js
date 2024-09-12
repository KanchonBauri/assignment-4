function checkDigitsInName(name) {
    if (typeof name !== "string") {
        return "Invalid Input"
    }
    for (let i = 0; i < name.length; i++) {
        if (!isNaN(name[i]) && name[i] !== " ") {
            return true;
        }
    }
    return false;
}
console.log(checkDigitsInName("Raj123")); //output- true
console.log(checkDigitsInName("n9ayeem")); //output- true
console.log(checkDigitsInName("e1mu3")); //output- true
console.log(checkDigitsInName("Suman")); //output- false
console.log(checkDigitsInName("Name2024")); //output- true
console.log(checkDigitsInName("!@#")); //output- false
console.log(checkDigitsInName(["Raj"])); //output- Invalid Input