function sumDigits(number){
    sum = 0;
    number = number.toString();
    for (const digit of number){
        sum += Number(digit)
    }

    console.log(sum)
}