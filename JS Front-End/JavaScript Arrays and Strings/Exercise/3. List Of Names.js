function listOfNames(array){

    array.sort((a, b) => a.localeCompare(b, undefined));

    for(let i = 0; i < array.length; i++){
        position = i + 1
        console.log(`${position}.${array[i]}`)
    }

}