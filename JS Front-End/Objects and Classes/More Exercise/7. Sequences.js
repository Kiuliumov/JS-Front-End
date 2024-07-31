function sequences(array){
    const uniqueArrays = [];
    for (const stringArray of array) {
        const currentArray = JSON.parse(stringArray)
       currentArray.sort((a, b) => b - a);
        let isUnique = true;
        for (const uniqueArray of uniqueArrays) {
            if(JSON.stringify(currentArray) === JSON.stringify(uniqueArray)){
                isUnique = false;
                break;
            }
        }
        if(isUnique){
            uniqueArrays.push(currentArray)
        }
        
    }

    uniqueArrays.sort((a, b) => a.length - b.length);

    for (const uniqueArray of uniqueArrays) {
        console.log(`[${uniqueArray.join(', ')}]`);
    }
}

sequences(['[-3, -2, -1, 0, 1, 2, 3, 4]',
    '[10, 1, -17, 0, 2, 13]',
    '[4, -3, 3, -2, 2, -1, 1, 0]']);