function subtract() {
    const number1 = document.getElementById('firstNumber').value;
    const number2 = document.getElementById('secondNumber').value;
    const div = document.getElementById('result');

    div.innerText = number1 - number2;

}