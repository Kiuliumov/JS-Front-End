function browserHistory(object, array){
    for (const command of array) {
        if(command.startsWith('Clear')){
            object['Open Tabs'] = [];
            object['Recently Closed'] = [];
            object['Browser Logs'] = [];
        } else {
            let [action, ...tab] = command.split(' ');
            tab = tab.join(' ');
            if(action == 'Open'){
                object['Open Tabs'].push(tab);
                object['Browser Logs'].push(command)
            } else if(action == 'Close'){
                if(object['Open Tabs'].includes(tab)){
                    object['Open Tabs'] = object['Open Tabs'].filter(openTab => openTab !== tab);
                    object['Recently Closed'].push(tab);
                    object['Browser Logs'].push(command);
                }
            }
        }
    }

    console.log(object['Browser Name']);
    console.log('Open Tabs: ' + object['Open Tabs'].join(', '))
    console.log('Recently Closed: ' + object['Recently Closed'].join(', '))
    console.log('Browser Logs: ' + object['Browser Logs'].join(', '))
}