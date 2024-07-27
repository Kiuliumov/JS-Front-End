function arrayRotations(array, numberOfRotations){
    for(i = 0; i < numberOfRotations; i++){
        element = array.shift();
        array.push(element);
    }
    console.log(array.join(' '));
}