
function solve() {
    const input = document.querySelector('#email');
    const regEx = new RegExp('^[a-z]+@[a-z]+\.[a-z]+$');

    input.addEventListener('change', (e) =>{
        const email = e.target.value;
        if (!regEx.test(email)) {
            input.classList.add('error');
        } else{
            input.classList.remove('error');
        }
    });
}

document.addEventListener('DOMContentLoaded', solve);
