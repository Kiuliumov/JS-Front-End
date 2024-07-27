function sameNumbers(number){
    number = number.toString();
    sum = 0;
    firstChar = number[0];
    isTheSame = true

    for(const char of number){
        if (char !== firstChar){
            isTheSame = false
        }

        sum += Number(char);
    }

    console.log(isTheSame);
    console.log(sum);
}