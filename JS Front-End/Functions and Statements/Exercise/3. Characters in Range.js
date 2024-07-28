function charracterInRange(charOne, charTwo){
    const charCodeOne = charOne.charCodeAt(0);
    const charCodeTwo = charTwo.charCodeAt(0);
    let firstCharCode = 0;
    let lastCharCode = 0;


    if(charCodeOne < charCodeTwo){
        firstCharCode = charCodeOne;
        lastCharCode = charCodeTwo;
    } else {
        firstCharCode = charCodeTwo;
        lastCharCode = charCodeOne;
    }

    let output = '';

    for(let charCode = firstCharCode + 1; charCode < lastCharCode; charCode++){
        output += String.fromCharCode(charCode) + ' ';
    }

    return output.trim();
}
