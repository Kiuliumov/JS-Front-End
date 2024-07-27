function revealWord(words, string){
    words = words.split(', ')
    
    stringArray = string.split(' ');


    for (const word of words) {
        for (const stringWord of stringArray) {
            if(stringWord.length == word.length && stringWord.includes('*')){
                stringArray[stringArray.indexOf(stringWord)] = word;
            }
        }
    }

    console.log(stringArray.join(' '));
}



revealWord('word, success', '**** is a good word. *******')