function solve(input){
    const n = Number(input[0]);
    const farmersObject = {}

    for(let i = 1; i <= n; i++){
        const [name, workArea, tasksLine] = input[i].split(' ');
        const tasks = tasksLine.split(',');
        farmersObject[name] = {'workArea': workArea, 'tasks': tasks};
    }

    for(let i = n + 1; i < input.length; i++){
        const [command, ...lines] = input[i].split(' / ');

        if(command === 'Execute'){
            const [farmerName, workArea, task] = lines
            const farmer = farmersObject[farmerName];
            if(farmer.workArea != workArea || !(farmer.tasks.includes(task))){
                console.log(`${farmerName} cannot execute the task: ${task}.`);
                continue;
            }
            console.log(`${farmerName} has executed the task: ${task}!`)
        }

        else if(command == 'Change Area'){
            const [farmerName, newWorkArea] = lines;
            const farmer = farmersObject[farmerName];
            farmer.workArea = newWorkArea;
            console.log(`${farmerName} has changed their work area to: ${newWorkArea}`);
        }

        else if(command == 'Learn Task'){
            const [farmerName, task] = lines;
            const farmer = farmersObject[farmerName]
            if(farmer.tasks.includes(task)){
                console.log(`${farmerName} already knows how to perform ${task}`);
                continue;
            }
            farmer.tasks.push(task);
            console.log(`${farmerName} has learned a new task: ${task}.`);
        }

        else{
            break;
        }
    }

    for (const [name, { workArea, tasks }] of Object.entries(farmersObject)) {
        const sortedTasks = tasks.slice().sort().join(', ');
        console.log(`Farmer: ${name}, Area: ${workArea}, Tasks: ${sortedTasks}`);
    }
}

