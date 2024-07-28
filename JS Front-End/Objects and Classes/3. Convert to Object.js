function convertToObject(json){
    const personInfo = JSON.parse(json);
    for(const key of Object.keys(personInfo)){
        console.log(`${key}: ${personInfo[key]}`);
    }
}