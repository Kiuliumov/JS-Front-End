function solve() {
    const to = document.querySelector('#selectMenuTo');
    const hex = new Option('Hexadecimal', 'hexadecimal')
    const bin = new Option('Binary', 'binary')
    to.add(hex);
    to.add(bin);

    const button = document.getElementsByTagName('button')[0];
    button.addEventListener('click', click)
}


function click(){
    const number = Number(document.querySelector('#input').value)
    console.log(number);

    const to = document.querySelector('#selectMenuTo').value;
    const resultField = document.querySelector('#result');
    let result;
    switch (to){
        case 'hexadecimal':
            result = number.toString(16);
            break;
        case 'binary':
            result = number.toString(2);
            break;
    }

    resultField.value = result;
}
