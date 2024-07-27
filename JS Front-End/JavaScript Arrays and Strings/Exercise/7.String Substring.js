function findIfStringExitst(substring, string){
    let words = string.split(' ')
    for (const word of words) {
        if(word.toLowerCase() == substring){
            console.log(substring);
            return;
        }
    }

    console.log(`${substring} not found!`);

}