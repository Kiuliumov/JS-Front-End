function makeADictionary(jsonObjects) {
    const dictionary = {};
    jsonObjects = jsonObjects.map((a) => JSON.parse(a));
    for (const jsonObject of jsonObjects) {
        const key = Object.keys(jsonObject)[0]
        const value = jsonObject[key]; 
        dictionary[key] = value;
    }

    const sortedKeys = Object.keys(dictionary).sort();
    for (const key of sortedKeys) {
        console.log(`Term: ${key} => Definition: ${dictionary[key]}`);
    }
}

makeADictionary(['{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}', '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}', '{"Boiler":"A fuel-burning apparatus or container for heating water."}', '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}', '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'])