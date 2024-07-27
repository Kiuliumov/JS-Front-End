function pascalCaseSplitter(string) {
    let sentance = '';
    let currentWord = '';

    for (const char of string) {
        if (char === char.toUpperCase() && currentWord.length > 0) {
            sentance += currentWord + ', '
            currentWord = char; 
        } else {
            currentWord += char; 
        }
    }

    if (currentWord.length > 0) {
        sentance += currentWord
    }

    sentance.trim();

    console.log(sentance);
}


pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');