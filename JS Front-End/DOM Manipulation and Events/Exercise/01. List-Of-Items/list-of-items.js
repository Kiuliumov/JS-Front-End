function addItem() {
    const list = document.querySelector('#items');
    
    const item = document.querySelector('#newItemText').value;
    if(item){
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
    }
}

