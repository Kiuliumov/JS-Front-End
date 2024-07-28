function calculator(numberOne, numberTwo, operator){

    function multiply(a, b){
        return a * b;
    }

    function add(a, b){
        return a + b;
    }

    function divide(a, b){
        return a / b;
    }

    function subtract(a, b){
        return a - b;
    }

    const operations = {
        'add': add,
        'subtract': subtract,
        'multiply': multiply,
        'divide': divide
    };

    return operations[operator](numberOne, numberTwo)

}