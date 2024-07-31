function displayArray(associativeArray){
    for(const key of Object.keys(associativeArray)){
        console.log(`${key} -> ${associativeArray[key]}`);
    }
}