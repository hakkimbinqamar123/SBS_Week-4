let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const evenNumbers = arr.filter(num => num % 2 === 0)

const students = [
    { name: "Abdul", marks: 85 },
    { name: "Rahul", marks: 35 },
    { name: "Arun", marks: 65 },
    { name: "Vishnu", marks: 28 },
    { name: "Akhil", marks: 90 }
]

console.log(students.filter(stud => stud.marks >= 40).map(student => ({
    ...student,
    status: "passed"
})))