function softUniStudents(info){
    const courses = {};
    for (const string of info) {

        if(string.includes(':')){
            const [courseName, capacityString] = string.split(': ');
            const capacity = Number(capacityString);
            if(courseName in courses){
                courses[courseName].capacity += capacity
            } else {
                courses[courseName] = {capacity: capacity, users: []};
            }
        } else {
            const parts = string.split('[');
            const username = parts[0].trim();
            const rest = parts[1].split('] with email ');
            const creditsCount = Number(rest[0].trim());
            const emailAndCourse = rest[1].split(' joins ');
            const email = emailAndCourse[0].trim();
            const courseName = emailAndCourse[1].trim();
            if(courseName in courses && courses[courseName].capacity > courses[courseName].users.length){
                const currentCourse = courses[courseName]
               currentCourse.users.push({username: username, creditsCount: Number(creditsCount), email: email});
            }
        }
    }

    
    const sortedCourses = Object.entries(courses).sort((a, b) => b[1].users.length - a[1].users.length);
    sortedCourses.forEach(([_, courseInfo]) => {
        courseInfo.users.sort((a, b) => b.creditsCount - a.creditsCount);
    });

    sortedCourses.forEach(([courseName, courseInfo]) => {
        console.log(`${courseName}: ${courseInfo.capacity - courseInfo.users.length} places left`);
        courseInfo.users.forEach(user => {
            console.log(`--- ${user.creditsCount}: ${user.username}, ${user.email}`);
        });
    });
}
