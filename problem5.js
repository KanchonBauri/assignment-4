function waitingTime(array, number) {
    if (!Array.isArray(array) || typeof number !== 'number') {
        return "Invalid Input"
    }
    let sum = 0;
    for (let arr of array) {
        sum = sum + arr;
    }
    const arrayLength = array.length
    const avgSum = Math.round(sum / arrayLength);
    const beforeIsratNumber = number - 1;
    const afterIsratNumber = beforeIsratNumber - arrayLength;
    const result = afterIsratNumber > 0 ? afterIsratNumber *  avgSum : 0;
    return result;

}

console.log(waitingTime([3, 5, 7, 11, 6], 10)); //output- 24
console.log(waitingTime([13, 2], 6)); //output- 24
console.log(waitingTime([13, 2, 6, 7, 10], 6)); //output- 0
console.log(waitingTime([6], 4)); //output- 12
console.log(waitingTime(7, 10)); //output- Invalid Input
console.log(waitingTime("[6,2]", 9)); //output- Invalid Input
console.log(waitingTime([7, 8, 3, 4, 5], "9")); //output- Invalid Input
