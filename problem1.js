// input Details
const students = [
    { name: "Dhishan Debnath", Roll: 1 },
    { name: "Animesh Gupta", Roll: 2 },
    { name: "Tapas Sen", Roll: 3 },
    { name: "Misti Dutta", Roll: 4 },
    { name: "Chini Misra", Roll: 5 }
   ];

const Details = [
    { Roll: 5, subjects: { math: 35, english: 56, chemistry: 76, computer: 68 } },
    { Roll: 3, subjects: { math: 33, chemistry: 12, computer: 50, english: 35 } },
    { Roll: 1, subjects: { math: 55, english: 75, chemistry: 76, computer: 94 } },
    { Roll: 4, subjects: { english: 12, chemistry: 85, computer: 68, math: 45 } },
    { Roll: 2, subjects: { math: 55, english: 56, computer: 48, chemistry: 12 } }
    ];


// formatted mark sheet function
function generateStudentMarkSheets(students, Details) {
    let studentsMarkSheets = [];
    students.forEach(student => {
        Details.forEach(Detail => {
            if (student.Roll === Detail.Roll ) {
    
                let total = Detail.subjects.math + Detail.subjects.english + Detail.subjects.chemistry + Detail.subjects.computer;
                let status = (total > 200) ? "pass" : "fail";
                 
                studentsMarkSheets.push({
                    ...student,
                    ...Detail.subjects,
                    "total" : total,
                    "status" : status
                });  
            } 
        });
    });
    return studentsMarkSheets;
}


const studentsMarkSheets = generateStudentMarkSheets(students, Details);
console.log(studentsMarkSheets);



   

