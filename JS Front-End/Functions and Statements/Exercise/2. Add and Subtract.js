function addOrSubtract(numberOne, numberTwo, numberThree){
    function sum(a, b){
        return a + b;
    }

    function subtract(a, b){
        return a - b;
    }

    let currentSum = sum(numberOne, numberTwo);
    return subtract(currentSum, numberThree);
}