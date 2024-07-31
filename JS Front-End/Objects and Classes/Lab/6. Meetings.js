function scheduleMeetings(meetings){
    const plans = {}

    for(const info of meetings){
        const [dayOfTheWeek, name] = info.split(' ');

        if(Object.keys(plans).includes(dayOfTheWeek)){
            console.log(`Conflict on ${dayOfTheWeek}!`);
        } else {
            console.log(`Scheduled for ${dayOfTheWeek}`);
            plans[dayOfTheWeek] = name;
        }
    }

    for(const key of Object.keys(plans)){
        console.log(`${key} -> ${plans[key]}`)
    }
}