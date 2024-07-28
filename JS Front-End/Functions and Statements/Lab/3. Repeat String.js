function repeatString(string, n){
    let newString = ''
    for(let i = 0; i < n; i++){
        newString += string;
    }
    return newString;
}


console.log(repeatString('abc', 5));