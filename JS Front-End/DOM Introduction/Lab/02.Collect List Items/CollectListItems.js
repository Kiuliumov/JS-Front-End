function extractText() {
    const listItems = document.getElementsByTagName('li');
    const textArea = document.getElementById('result');
    let innerHTMLtoAdd = ''
    
    for (const li of listItems) {
        innerHTMLtoAdd += li.innerHTML + '\n';
    }
    innerHTMLtoAdd.trim();

    textArea.innerHTML = innerHTMLtoAdd;




}