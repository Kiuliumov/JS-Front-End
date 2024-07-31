function flightSchedule(arrayInfo){
    const [array, changedStatus, finalStatus] = arrayInfo;
    const allFlights = {};

    for(const flight of array){
        const [sector, destination] = flight.split(' ');

        if(!(sector in allFlights)){
            allFlights[sector] = []
        }
        const stats = {}
        stats.Destination = destination;
        stats.Status = 'Ready to fly'
        allFlights[sector].push(stats);
    }

    for (const statusChange of changedStatus) {
        const [sector, status] = statusChange.split(' ');
        if (allFlights[sector]) {
            allFlights[sector].forEach((flight) => {
                flight.Status = status;
            });
        }
    }

    if(finalStatus[0] == 'Cancelled'){
        for(const key in allFlights){
            for(const flight of allFlights[key]){
                if(flight.Status == 'Cancelled'){
                    console.log(flight);
                }
            }
        }
    } else {
        for(const key in allFlights){
            for(const flight of allFlights[key]){
                if(flight.Status == 'Ready to fly'){
                    console.log(flight);
                }
            }
        }
    }
}

flightSchedule([["WN269 Delaware","FL2269 Oregon","WN498 Las Vegas","WN3145 Ohio","WN612 Alabama","WN4010 New York","WN1173 California","DL2120 Texas","KL5744 Illinois","WN678 Pennsylvania"],["DL2120 Cancelled","WN612 Cancelled","WN1173 Cancelled","SK430 Cancelled"],["Cancelled"]]);