document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const inputs = document.querySelectorAll('input');
    for(const input of inputs){
        input.addEventListener('focus', (e) => {e.target.parentNode.classList.add('focused')});
        input.addEventListener('blur', (e) => {e.target.parentNode.classList.remove('focused')});
    }
}