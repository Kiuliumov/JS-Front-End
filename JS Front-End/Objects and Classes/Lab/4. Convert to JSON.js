function jsonToString(firstName, lastName, hairColor){
    const person = {name: firstName, lastName: lastName, hairColor: hairColor};
    return JSON.stringify(person);
}