function addItem() {
    const items = document.querySelector('#items');

    const text = document.querySelector('#newItemText');
   if(text.value){
            const li = document.createElement('li');
            li.textContent = text.value;
            const a = document.createElement('a');
            a.textContent = '[Delete]';
            a.href = '#'
            a.onclick = (e) => e.target.parentElement.remove();
            li.appendChild(a);
            items.appendChild(li);
    }
}
