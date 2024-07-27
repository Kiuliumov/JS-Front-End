function decodeHashtags(string){
    words = string.split(' ');

    for(const word of words){
        
        if(word[0] == '#' && /^[A-Za-z]+$/.test(word.slice(1, word.length))){
            console.log(word.slice(1, word.length));
        }
    }
}