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



function sendNotification(email)   {
    if (typeof email !== "string") {
        return "Invalid Email"
    }
    if (email.includes('@')) {
        const y = email.split('@');
        return y[0] + ' sent you an email from ' + y[1];
    } else {
        return "Invalid Email";
    }
}



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



function calculateFinalScore(obj)   {
    if (typeof obj !== "object") {
        return "Invalid Input"
    }
    const totalMarks = obj.testScore + obj.schoolGrade;
    if (obj.isFFamily) {
        const result = totalMarks + (totalMarks * 0.2);
        if (result >= 80) {
            return "true";
        } else {
            return "false";
        }
    }
    return "false"
}



function  waitingTime(waitingTimes  , serialNumber) {
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
        return "Invalid Input"
    }
    let sum = 0;
    for (let arr of waitingTimes) {
        sum = sum + arr;
    }
    const arrayLength =waitingTimes.length
    const avgSum = Math.round(sum / arrayLength);
    const beforeIsratNumber = serialNumber - 1;
    const afterIsratNumber = beforeIsratNumber - arrayLength;
    const result = afterIsratNumber > 0 ? afterIsratNumber *  avgSum : 0;
    return result;

}