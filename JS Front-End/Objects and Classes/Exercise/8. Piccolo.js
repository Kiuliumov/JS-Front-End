function picolo(array) {
    const parking = {};

    for (const data of array) {
        const [command, carnumber] = data.split(', ');
        if (command === 'IN') {
            parking[carnumber] = true;
        } else if (command === 'OUT') {
            delete parking[carnumber];
        }
    }

    const parkedCars = Object.keys(parking).filter(carnumber => parking[carnumber]);
    
    if (parkedCars.length === 0) {
        console.log('Parking Lot is Empty');
    } else {
        parkedCars.sort().forEach(car => console.log(car));
    }
}

picolo(['IN, ABC123', 'IN, XYZ456', 'OUT, ABC123', 'IN, DEF789']);

