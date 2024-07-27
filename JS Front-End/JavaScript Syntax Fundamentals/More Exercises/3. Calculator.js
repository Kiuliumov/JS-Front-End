function calculator(number, operator, number1){
    let result;

    switch(operator){
        
        case '+':
            result = number + number1;
        break;

        case '-':
            result = number - number1;
        break;

        case '/':
            result = number / number1;
        break;

        case '*':
            result = number * number1;
        break;
    }

    console.log(result.toFixed(2));
}