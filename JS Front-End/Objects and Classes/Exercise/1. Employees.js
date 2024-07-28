function assingNumbers(listOfNames){
    const employeesInfo = {};

    for(const name of listOfNames){
        employeesInfo[name] = name.length;
    }

    for(employee in employeesInfo){
        console.log(`Name: ${employee} -- Personal Number: ${employeesInfo[employee]}`)
    }
}