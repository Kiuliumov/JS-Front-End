function numberModification(number){
    function averageDigitSum(number){
        let sumOfDigits = 0;
        for(let digit of number){
            digit = Number(digit);
            sumOfDigits += digit;
        }
        return sumOfDigits / number.length;
    }

    number = String(number);

    while(averageDigitSum(number) < 5){
        number += '9';
    }

    console.log(number);
}

