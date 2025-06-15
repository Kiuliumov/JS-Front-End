document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const submit = document.querySelector('input[type="submit"]');

    submit.addEventListener('click', (e) => {
        const newItemTextInput = document.querySelector('#newItemText');
        const newItemValInput = document.querySelector('#newItemValue');

        const newItemText = newItemTextInput.value;
        const newItemVal = newItemValInput.value;

        if (newItemText && newItemVal) {
            const option = document.createElement('option');
            option.text = newItemText;
            option.value = newItemVal;

            const select = document.querySelector('select');
            select.appendChild(option);

            newItemTextInput.value = '';
            newItemValInput.value = '';
        }
    });
}
