function calculate(number, number1, operation){
    switch(operation){
        case '+':
            console.log(number + number1)
        break;

        case '-':
            console.log(number - number1)
        break;

        case '/':
            console.log(number / number1)
        break;

        case '*':
            console.log(number * number1)
        break;

        case '%':
            console.log(number % number1)
        break;
        
        case '**':
            console.log(number ** number1)
        break;
    }
}