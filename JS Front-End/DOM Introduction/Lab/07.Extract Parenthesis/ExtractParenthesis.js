function extract(content) {
    const textElement = document.getElementById(content);
    let extractedContent = [];
    let isInParentecies = false;
    let currentWord = '';
    for (const char of textElement.textContent) {
        
        if(char == '('){
            isInParentecies = true;
            continue;
        } else if(char == ')'){
            isInParentecies = false;
            extractedContent.push(currentWord);
            currentWord = '';
            continue;
        }

        if(isInParentecies){
            currentWord += char;
        }

    }

    return(extractedContent.join(' '))
}
