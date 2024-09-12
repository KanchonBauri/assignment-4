
function calculateFinalScore(obj) {if (typeof obj !== "object") {
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
const person1 = { name: "Rajib", testScore: 50,  schoolGrade: 30, isFFamily : true  };
const person2 = { name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : false };
const person3 = "hello" ;
const person4 = { name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  };
const x = calculateFinalScore(person1);
const y = calculateFinalScore(person2);
const z = calculateFinalScore(person3);
const u = calculateFinalScore(person4);
console.log(x);
console.log(y);
console.log(z);
console.log(u);
