function garage(array) {
    const garageObjects = {};

    for (const garage of array) {
        const [garageNumberString, carString] = garage.split(' - ');
        const garageNumber = Number(garageNumberString);

        if (!(garageNumber in garageObjects)) {
            garageObjects[garageNumber] = [];
        }

        const carObject = {};
        const carProperties = carString.split(', ');

        for (const carProperty of carProperties) {
            const [key, value] = carProperty.split(': ');
            carObject[key] = value;
        }
        garageObjects[garageNumber].push(carObject);
    }

    for (const garage in garageObjects) {
        console.log(`Garage № ${garage}`);
        for (const car of garageObjects[garage]) {
            let log = '--- ';
            for (const property in car) {
                log += `${property} - ${car[property]}, `;
            }
            log = log.slice(0, -2);
            console.log(log);
        }
    }
}

garage(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);