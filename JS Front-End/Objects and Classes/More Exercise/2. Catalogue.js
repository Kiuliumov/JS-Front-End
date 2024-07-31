function catalogue(array){
    const dict = {};
    array.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
    
    for(const item of array){
        if(!(item[0].toUpperCase() in dict)){
            dict[item[0].toUpperCase()] = [];
        }
        const tokens = item.split(' : ')
        const itemObject = {}
        itemObject[tokens[0]] = tokens[1];
        dict[item[0].toUpperCase()].push(itemObject);
    }

    for (const key in dict) {
        console.log(key);
        for (const item of dict[key]) {
            const itemName = Object.keys(item)[0];
            console.log(`  ${itemName}: ${item[itemName]}`);
        }
    }
}

catalogue(['Appricot : 20.4'])