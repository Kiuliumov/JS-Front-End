function signCheck(numberOne, numberTwo, numberThree){
    const numbers = [numberOne, numberTwo, numberThree]
    let isNegative = false

    for (const number of numbers) {
        if(number < 0){
            isNegative = !isNegative;
        }
    }

    if(isNegative){
        return 'Negative';
    } else {
        return 'Positive';
    }
}