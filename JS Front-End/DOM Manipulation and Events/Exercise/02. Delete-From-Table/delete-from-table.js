function deleteByEmail() {
    const emailToDelete = document.querySelector('input').value;
    const textField = document.querySelector('#result');
    const items = document.querySelector('tbody');
    let text = 'Not found.';
    for(const tr of items.children){
        if(tr.children[1].textContent === emailToDelete){
            tr.remove();
            text = 'Deleted.'
            break;
        }
    }
    textField.textContent = 'Not found.'
}
