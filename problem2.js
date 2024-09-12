function sendNotification(email) {
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
const x1 = sendNotification("zihad@gmail.com");
const x2 = sendNotification("farhan34@yahoo.com");
const x3 = sendNotification("nadim.naem5@outlook.com");
const x4 = sendNotification("fahim234.hotmail.com");
const x5 = sendNotification("sadia8icloud.com");
console.log(x1);
console.log(x2);
console.log(x3);
console.log(x4);
console.log(x5);