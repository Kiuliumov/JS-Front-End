function solve() {
    
    function click(){
    const number = Number(document.querySelector('#input').value)
    console.log(number);

    const to = document.querySelector('#selectMenuTo').value;
    const resultField = document.querySelector('#result');
    let result;
    switch (to){
        case 'hexadecimal':
            result = number.toString(16).toUpperCase();
            break;
        case 'binary':
            result = number.toString(2);
            break;
    }

    resultField.value = result;
}

    const to = document.querySelector('#selectMenuTo');
    const hex = document.createElement('option');
    hex.value = 'hexadecimal';
    hex.textContent = 'Hexadecimal';

    const bin = document.createElement('option');
    bin.value = 'binary';
    bin.textContent = 'Binary';

    to.appendChild(hex);
    to.appendChild(bin);

    const button = document.getElementsByTagName('button')[0];
    button.addEventListener('click', click)
}


