function armies(commands){
    const armies = {};
    for (const command of commands) {
        if(command.includes('arrives')){
            const leaderName = command.split(' arrives')[0];
            armies[leaderName] = {};

        } else if(command.includes(',')) {
            const [leaderName, armyInfo] = command.split(': ');
            if(leaderName in armies){
                let currentLeader = leaderName;
                const [armyName, armyCount] = armyInfo.split(', ');
                armies[currentLeader][armyName] = Number(armyCount);

            }
        } else if(command.includes('+')){
            const [armyName, armyCount] = command.split(' + ');

            for (const key in armies) {
                const currentLeader = armies[key]
                if(armyName in currentLeader){
                    currentLeader[armyName] += Number(armyCount);
                }
            }
        } else {
            const leader = command.split(' defeated')[0]
            delete armies[leader];
        }
    }


    const sortedLeaders = Object.entries(armies)
    .sort(([, armiesA], [, armiesB]) => {
        const totalTroopsA = Object.values(armiesA).reduce((sum, count) => sum + count, 0);
        const totalTroopsB = Object.values(armiesB).reduce((sum, count) => sum + count, 0);
        return totalTroopsB - totalTroopsA;
    })
    .reduce((obj, [leader, armyObj]) => {
        obj[leader] = armyObj;
        return obj;
    }, {});
    for (const leader in sortedLeaders) {
        const totalTroops = Object.values(sortedLeaders[leader]).reduce((sum, count) => sum + count, 0);
        console.log(`${leader}: ${totalTroops}`);
        const sortedArmies = Object.entries(sortedLeaders[leader])
        .sort(([, aCount], [, bCount]) => bCount - aCount)
        .reduce((obj, [armyName, count]) => {
            obj[armyName] = count;
            return obj;
        }, {});
        for (const [army, count] of Object.entries(sortedArmies)) {
            console.log(`>>> ${army} - ${count}`);
        }
    }
}

