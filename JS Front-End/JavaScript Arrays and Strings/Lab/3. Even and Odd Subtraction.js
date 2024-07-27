function differenceBetweenEvenAndOdd(array){
    let evenSum = 0;
    let oddSum = 0;
    array.forEach((number => {
        if(number % 2 == 0){
            evenSum += number;
        } else {
            oddSum += number;
        }
    }));

    console.log(evenSum - oddSum);
}