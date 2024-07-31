function schoolRegister(students){
    const allStudentsByGrade = {};
    for (const studentData of students) {
        const [name, grade, averageScore] = studentData.split(', ');
        let studentName = name.split(': ')[1];
        let studentGrade = Number(grade.split(': ')[1]) + 1;
        let studentAverageScore = Number(averageScore.split(': ')[1]);
        if(!(studentAverageScore >= 3)){
            continue;
        }
        if(!(studentGrade in allStudentsByGrade)){
            allStudentsByGrade[studentGrade] = [];
        }

        allStudentsByGrade[studentGrade].push([studentName, studentAverageScore]);
    }

    for (const grade in allStudentsByGrade) {
        console.log(`${grade} Grade`);
        const listOfStudents = [];
        let annualScore = 0;
        
        for (const student of allStudentsByGrade[grade]) {
            listOfStudents.push(student[0]);
            annualScore += student[1];
        }
        const averageAnnualScore = annualScore / listOfStudents.length;
        console.log(`List of students: ${listOfStudents.join(', ')}`);
        console.log(`Average annual score from last year: ${averageAnnualScore.toFixed(2)}`);
        console.log();
    }
}