function wordsTracker(array){
    const sentence = array.shift().split(' ').reduce((acc, word) => {
        acc[word] = 0;
        return acc;}, {});
    
    for(const word of array){
        if(word in sentence){
            sentence[word] += 1;
        }
    }

    const sortedSentence = Object.fromEntries(Object.entries(sentence).sort((a, b) => b[1] - a[1]));
    for(word in sortedSentence){
        console.log(`${word} - ${sentence[word]}`);
    }

}