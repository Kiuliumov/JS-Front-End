function createTownObjects(array){
    for (const city of array) {
        let [name, latitude, longitude] = city.split(' | ');
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);
        console.log({town: name, latitude: latitude, longitude: longitude});
    }
}

createTownObjects(['Sofia | 500 | 500']);