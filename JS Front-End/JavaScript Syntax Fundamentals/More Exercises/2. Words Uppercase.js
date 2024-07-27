function uppercaseWords(sentance){
    const wordsRegex = /\b\w+\b/g;
    words = sentance.match(wordsRegex);

    for(i = 0; i < words.length; i++){
        words[i] = words[i].toUpperCase();
    }

    console.log(words.join(', '))
}