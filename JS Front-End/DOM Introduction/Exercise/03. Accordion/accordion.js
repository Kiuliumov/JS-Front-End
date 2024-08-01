function toggle() {
    const readMore = document.getElementsByClassName('button')[0];
    const content = document.getElementById('extra');
    
    if(content.style.display == 'block'){
        readMore.innerText = 'More';
        content.style.display = 'none'
        return;
    }
     readMore.innerText = 'Less';
     content.style.display = 'block'

}